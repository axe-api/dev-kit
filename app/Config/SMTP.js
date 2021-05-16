export default async () => {
  return {
    host: process.env.SMTP_HOST || "mail.yourhost.com",
    user: process.env.SMTP_USER,
  };
};
