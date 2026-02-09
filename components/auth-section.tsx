"use client";

import React from "react"

import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  Bike,
  ChevronRight,
  Shield,
  Users,
  Compass,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Users,
    title: "Join 12,000+ Riders",
    description: "Connect with the largest motorcycle community in India",
  },
  {
    icon: Compass,
    title: "Discover New Routes",
    description: "Access 350+ curated routes across all 28 states",
  },
  {
    icon: Shield,
    title: "Organize Group Rides",
    description: "Plan, schedule, and lead rides with built-in tools",
  },
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const bikeBrands = [
  "Royal Enfield",
  "KTM",
  "Bajaj",
  "Honda",
  "Yamaha",
  "Suzuki",
  "TVS",
  "Kawasaki",
  "BMW",
  "Triumph",
  "Harley-Davidson",
  "Jawa",
  "Benelli",
  "Hero",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function AuthSection() {
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [bike, setBike] = useState("");
  const [bikeModel, setBikeModel] = useState("");

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setState("");
    setBike("");
    setBikeModel("");
    setErrorMessage("");
  }

  function switchMode(newMode: "signin" | "signup") {
    setMode(newMode);
    setFormState("idle");
    setErrorMessage("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    // Validation
    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      setErrorMessage("Please enter a password.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }
    if (mode === "signup") {
      if (!firstName.trim() || !lastName.trim()) {
        setErrorMessage("Please enter your full name.");
        return;
      }
      if (!state) {
        setErrorMessage("Please select your state.");
        return;
      }
      if (!bike) {
        setErrorMessage("Please select your bike brand.");
        return;
      }
    }

    // Simulate submission
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  }

  if (formState === "success") {
    return (
      <section
        id="auth"
        className="scroll-mt-20 border-t border-border/30 bg-secondary/30 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle2 className="h-10 w-10 text-green-400" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              {mode === "signup" ? (
                <>
                  Welcome to <span className="text-primary">RideIndia</span>!
                </>
              ) : (
                <>
                  Welcome <span className="text-primary">Back</span>!
                </>
              )}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {mode === "signup"
                ? `Your rider profile has been created, ${firstName}! You're now part of India's largest motorcycle community. Start exploring routes, join group rides, and connect with fellow riders.`
                : "You're signed in and ready to ride. Check out the latest community posts and upcoming group rides."}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  const feedSection = document.getElementById("feed");
                  if (feedSection) feedSection.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Compass className="h-4 w-4" />
                Explore Community
              </Button>
              <Button
                variant="outline"
                className="gap-2 border-border/50 bg-transparent text-foreground hover:bg-secondary"
                onClick={() => {
                  setFormState("idle");
                  resetForm();
                }}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="auth"
      className="scroll-mt-20 border-t border-border/30 bg-secondary/30 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              {mode === "signup" ? (
                <>
                  Join the <span className="text-primary">Ride</span>
                </>
              ) : (
                <>
                  Welcome <span className="text-primary">Back</span>
                </>
              )}
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              {mode === "signup"
                ? "Create your rider profile and become part of India's most passionate motorcycle community."
                : "Sign in to access your rides, connect with friends, and continue your journey."}
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
            <div className="mb-6 flex rounded-xl bg-secondary p-1">
              <button
                type="button"
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                  mode === "signup"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => switchMode("signup")}
              >
                Create Account
              </button>
              <button
                type="button"
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                  mode === "signin"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => switchMode("signin")}
              >
                Sign In
              </button>
            </div>

            {errorMessage && (
              <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {errorMessage}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {mode === "signup" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Arjun"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full rounded-xl border border-border/50 bg-secondary py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Mehta"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-xl border border-border/50 bg-secondary py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    placeholder="rider@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border/50 bg-secondary py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-border/50 bg-secondary py-3 pl-10 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {mode === "signup" && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="state"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        State / UT
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <select
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-border/50 bg-secondary py-3 pl-10 pr-4 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                        >
                          <option value="">Select State</option>
                          {indianStates.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="bike"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Primary Bike
                      </label>
                      <div className="relative">
                        <Bike className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <select
                          id="bike"
                          value={bike}
                          onChange={(e) => setBike(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-border/50 bg-secondary py-3 pl-10 pr-4 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                        >
                          <option value="">Select Brand</option>
                          {bikeBrands.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="bikeModel"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Bike Model
                    </label>
                    <div className="relative">
                      <Bike className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="bikeModel"
                        type="text"
                        placeholder="e.g. Himalayan 450, Duke 390"
                        value={bikeModel}
                        onChange={(e) => setBikeModel(e.target.value)}
                        className="w-full rounded-xl border border-border/50 bg-secondary py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                </>
              )}

              <Button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full gap-2 bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              >
                {formState === "submitting" ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    {mode === "signup"
                      ? "Creating Profile..."
                      : "Signing In..."}
                  </>
                ) : (
                  <>
                    {mode === "signup" ? "Create Rider Profile" : "Sign In"}
                    <ChevronRight className="h-5 w-5" />
                  </>
                )}
              </Button>

              {mode === "signin" && (
                <p className="text-center text-sm text-muted-foreground">
                  <button
                    type="button"
                    className="text-primary hover:underline"
                    onClick={() =>
                      alert(
                        "Password reset link would be sent to your email."
                      )
                    }
                  >
                    Forgot your password?
                  </button>
                </p>
              )}

              <p className="text-center text-sm text-muted-foreground">
                {mode === "signup" ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="font-medium text-primary hover:underline"
                      onClick={() => switchMode("signin")}
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    New to RideIndia?{" "}
                    <button
                      type="button"
                      className="font-medium text-primary hover:underline"
                      onClick={() => switchMode("signup")}
                    >
                      Create Account
                    </button>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
