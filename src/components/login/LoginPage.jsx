const INPUTS = [
  { id: "emailOrUsername", label: "Email or username*", type: "text", icon: "user" },
  { id: "password", label: "Password*", type: "password", icon: "lock" },
];

function FieldIcon({ type }) {
  if (type === "lock") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[15px] w-[15px] fill-black/95"
      >
        <path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-7-2a2 2 0 1 1 4 0v2h-4V7Zm2 9a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 16Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px] fill-black/95"
    >
      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2.25c-3.2 0-9 1.6-9 4.8V21h18v-1.95c0-3.2-5.8-4.8-9-4.8Z" />
    </svg>
  );
}

export function LoginPage() {
  return (
    <main className="bg-white font-sans text-black">
      <section className="mx-auto w-full max-w-[1920px] px-0 pb-8 pt-0 sm:px-0 md:pb-12">
        <div className="relative isolate min-h-[620px] overflow-hidden border-y-[3px] border-[#06C7F2] bg-white md:min-h-[720px]">
          <img
            src="/images/login-bg-new.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-white/8" />

          <div className="relative z-10 p-4 sm:p-6 md:p-6">
            <div className="ml-2 mt-2 w-full max-w-[448px] rounded-[50px] border-[6px] border-[#FFE500] bg-[#E7E7E7] px-6 py-8 shadow-[0_8px_28px_rgba(0,0,0,0.12)] sm:ml-6 sm:px-8 sm:py-9 md:ml-10 md:mt-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/login-logo.png"
                  alt="Cow Paradise"
                  className="h-auto w-[120px] object-contain"
                />

                <div className="mt-5 inline-flex overflow-hidden rounded-[6px] border border-[#06C7F2]">
                  <button
                    type="button"
                    className="border-r border-[#06C7F2] bg-[#06C7F2] px-5 py-1.5 font-display text-[39px] font-semibold leading-none tracking-[0.01em] text-white underline decoration-[1.5px] underline-offset-2"
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    className="bg-white px-5 py-1.5 font-display text-[39px] font-semibold leading-none tracking-[0.01em] text-[#06C7F2]"
                  >
                    Sign up
                  </button>
                </div>

                <h1 className="mt-6 text-center font-display text-[53px] font-bold leading-[0.95] text-[#06C7F2] [text-shadow:0_2px_0_#ffffff]">
                  Welcome Back to
                  <br />
                  Cow Paradise
                </h1>
                <p className="mt-2 max-w-[340px] text-center text-[18px] leading-[1.22] text-black/85">
                  Continue your adventure, manage your collectibles, and explore
                  the Cowparadise.
                </p>

                <form className="mt-5 w-full space-y-3" onSubmit={(event) => event.preventDefault()}>
                  {INPUTS.map((field) => (
                    <label
                      key={field.id}
                      htmlFor={field.id}
                      className="flex h-[42px] items-center rounded-[7px] border border-[#CCCCCC] bg-[#F3F3F3] px-3"
                    >
                      <FieldIcon type={field.icon} />
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.label}
                        className="ml-2.5 w-full border-0 bg-transparent text-[14px] leading-none text-black placeholder:text-black/65 focus:outline-none"
                      />
                    </label>
                  ))}

                  <div className="mt-1 flex items-center justify-between gap-3 text-[13px] text-black/75">
                    <label className="flex items-center gap-1.5">
                      <input type="checkbox" className="h-3.5 w-3.5 rounded-[2px] border border-black/70" />
                      <span>Remember me</span>
                    </label>
                    <button type="button" className="bg-transparent p-0 text-[13px] text-black/75">
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 h-[49px] w-full rounded-[6px] bg-[#06C7F2] font-display text-[31px] font-semibold leading-none text-white [box-shadow:inset_0_1px_0_rgba(255,255,255,0.75),0_3px_0_#07add2]"
                  >
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
