export type Ticket = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export const tickets: Ticket[] = [
  { id: "1", title: "Login Issue", description: "Cannot log in to the account", status: "Open" },
  { id: "2", title: "Payment Error", description: "Payment page crashes on submit", status: "In Progress" },
  { id: "3", title: "Feature Request", description: "Add dark mode to the app", status: "Closed" },
];
