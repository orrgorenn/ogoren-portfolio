export default function EmailTemplate({
  email,
  message,
}: {
  email: string;
  message: string;
}) {
  return (
    <div>
      <h1>You got a new message from you website!</h1>

      <p>From: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}
