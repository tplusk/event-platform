export type User = {
  id: string;
  email: string;
  role: "user" | "admin";
};

export type AuthResponse = {
  user: User;
  accessToken: string;
};
