import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type FeedbackFormProps = {
  onSuccess: () => void;
};

const createFeedbackSchema = z.object({
  feedback: z.string().min(20, { message: "Minimo 20 caracteres." }),
});

type CreateFeedbackFormData = z.infer<typeof createFeedbackSchema>;

export default function FeedbackForm(props: FeedbackFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateFeedbackFormData>({
    defaultValues: {
      feedback: "",
    },
    resolver: zodResolver(createFeedbackSchema),
  });

  const onSubmit = async (data: CreateFeedbackFormData) => {
    reset({ feedback: "" });
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    props.onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2">
      <div className="flex flex-col items-start w-full ">
        <textarea
          placeholder="Enter your feedback here, it must not be at least 20 characters long."
          title="feedback"
          className="w-full h-28 resize-none p-2 border border-black rounded-lg"
          {...register("feedback")}
        ></textarea>
        {errors.feedback && <p>{errors.feedback.message}</p>}
        <button
          className={twMerge(
            "bg-black p-3 mt-10 text-white rounded-lg w-full bottom-0",
            isLoading && "bg-red-700"
          )}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Enviando" : "Enviar"}
        </button>
      </div>
    </form>
  );
}
