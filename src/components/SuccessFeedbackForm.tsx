type SucessFeedbackFormProps = {
  onSendNewFeedback: () => void;
};

export default function SucessFeedbackForm(props: SucessFeedbackFormProps) {
  return (
    <form action="">
      <p>Feedback enviado com sucesso! 🎉</p>
      <button
        onClick={() => props.onSendNewFeedback()}
        className={
          " bg-indigo-700 p-3 mt-10 text-white rounded-lg w-full bottom-0"
        }
      >
        Enviar um novo feedback
      </button>
    </form>
  );
}
