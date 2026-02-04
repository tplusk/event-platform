import { useState, type ChangeEvent, type FormEvent } from "react";

type SignUpForm = {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Partial<Record<keyof SignUpForm, string>>;

export default function SignUp() {
  const [form, setForm] = useState<SignUpForm>({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    // first- and last name validation
    if (!form.firstName.trim()) newErrors.firstName = "First name is required!";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required!";

    // email validation
    if (!form.email) {
      newErrors.email = "Email is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format!";
    }

    if (form.email !== form.confirmEmail) {
      newErrors.confirmEmail = "Email do not match!";
    }

    // password validation
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must be 8+ characters with uppercase, lowercase, number and symbol!";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
    }
  };

  return (
    <main>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit} noValidate>
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}

        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirm Email"
          value={form.confirmEmail}
          onChange={handleChange}
        />
        {errors.confirmEmail && <p>{errors.confirmEmail}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}
