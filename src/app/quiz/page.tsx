"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Define the schema for the form validation using Zod
const FormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter a name",
    })
    .min(2, {
      message: "Name must be more than 2 characters long",
    })
    .max(20, {
      message: "Name must be no longer than 20 characters",
    }),
  question1: z.string({
    required_error: "Please select an option",
  }),
  question2: z.string({
    required_error: "Please select an option",
  }),
  question3: z.string({
    required_error: "Please select an option",
  }),
  question4: z.string({
    required_error: "Please select an option",
  }),
  question5: z.string({
    required_error: "Please select an option",
  }),
});

// Correct answers for the quiz
const correctAnswers = {
  question1: "thc",
  question2: "meth",
  question3: "addiction",
  question4: "meth",
  question5: "cannabis",
};

export default function Quiz() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Function to calculate the score and show the toast
  function onSubmit(data: z.infer<typeof FormSchema>) {
    let score = 0;

    // Check each answer and increment the score if correct
    Object.keys(correctAnswers).forEach((key) => {
      if (data[key as keyof typeof data] === correctAnswers[key as keyof typeof correctAnswers]) {
        score++;
      }
    });

    toast({
      title: `Congratulations ${data.name}!`,
      description: `You scored ${score} out of 5.`,
    });

    console.log(data); // Optional: still logging the data for debugging
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/drugs.jpeg")', // Background image from the public folder
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 bg-black p-8 rounded-lg shadow-lg">
            {/* Question 1 */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your name?</FormLabel>
                  <FormControl>
                    <Input placeholder="your name here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Question 1 */}
            <FormField
              control={form.control}
              name="question1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is the main chemical in marijuana that makes people feel "high"?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select an answer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="thc">THC</SelectItem>
                      <SelectItem value="nicotine">Nicotine</SelectItem>
                      <SelectItem value="cbd">CBD</SelectItem>
                      <SelectItem value="caffeine">Caffeine</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Question 2 */}
            <FormField
              control={form.control}
              name="question2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which of these drugs can cause serious long-term damage to your body and is highly addictive?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select an answer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cannabis">Cannabis</SelectItem>
                      <SelectItem value="cocaine">Cocaine</SelectItem>
                      <SelectItem value="meth">Methamphetamine (Meth)</SelectItem>
                      <SelectItem value="alcohol">Alcohol</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Question 3 */}
            <FormField
              control={form.control}
              name="question3"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is a big danger of using drugs like heroin?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select an answer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dreams">You might have strange dreams</SelectItem>
                      <SelectItem value="addiction">You could get addicted or overdose</SelectItem>
                      <SelectItem value="memory">You might lose your memory</SelectItem>
                      <SelectItem value="thirsty">You could get really thirsty</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Question 4 */}
            <FormField
              control={form.control}
              name="question4"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which of these drugs is very addictive and hard to quit?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select an answer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="lsd">LSD</SelectItem>
                      <SelectItem value="ecstasy">Ecstasy (MDMA)</SelectItem>
                      <SelectItem value="meth">Methamphetamine (Meth)</SelectItem>
                      <SelectItem value="cannabis">Cannabis</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Question 5 */}
            <FormField
              control={form.control}
              name="question5"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which drug is most commonly associated with feelings of relaxation or being "chill"?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select an answer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cocaine">Cocaine</SelectItem>
                      <SelectItem value="meth">Methamphetamine (Meth)</SelectItem>
                      <SelectItem value="cannabis">Cannabis</SelectItem>
                      <SelectItem value="heroin">Heroin</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
