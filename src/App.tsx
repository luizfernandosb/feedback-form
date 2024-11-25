import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import SucessFeedbackForm from "./components/SuccessFeedbackForm";

export default function App() {
  const [showedForm, setShowedForm] = useState<"feedback" | "success">(
    "feedback"
  );

  return (
    <main className="min-h-screen min-w-screen  flex flex-col items-center py-10 px-5  ">
      <div className="mb-5">
        <h1 className="text-3xl">Envie seu Feedback</h1>
        <p>Por favor, nos conte foi a sua experiência.</p>
      </div>
      {showedForm == "feedback" && (
        <FeedbackForm onSuccess={() => setShowedForm("success")} />
      )}
      {showedForm == "success" && (
        <SucessFeedbackForm
          onSendNewFeedback={() => setShowedForm("feedback")}
        />
      )}
    </main>
  );
}
