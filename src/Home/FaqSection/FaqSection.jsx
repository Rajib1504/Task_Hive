import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const FaqSection = () => {
  return (
    <>
      <SectionTitle
        heading={"Frequently Asked Questions"}
        subHeading={"Find answers to common questions about using TaskHive."}
      ></SectionTitle>
      <div className="flex justify-center items-center">
        <div className="join join-vertical w-full lg:w-11/12 border-2 border-borderColor">
          <div className="collapse collapse-arrow join-item border-2 border-borderColor">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-2xl font-bold">
              How do I sign up as a Worker or Buyer?
            </div>
            <div className="collapse-content">
              <p className="font-semibold">
                Click on the "Sign Up" button on the homepage. Select whether
                you want to register as a Worker or Buyer, fill in your details,
                and verify your email to complete the registration.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-borderColor border-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-2xl font-bold">
              What types of tasks are available on TaskHive?
            </div>
            <div className="collapse-content">
              <p className="font-semibold">
                Tasks include social media engagement, surveys, content
                creation, app testing, data entry, and more. The variety of
                tasks depends on Buyers' posted requirements.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-borderColor border-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-2xl font-bold">
              How do Workers earn coins?
            </div>
            <div className="collapse-content">
              <p className="font-semibold">
                Workers earn coins by successfully completing tasks posted by
                Buyers. Coins can later be redeemed or withdrawn as payments.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-borderColor border-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-2xl font-bold">
              How are payments handled on TaskHive?
            </div>
            <div className="collapse-content">
              <p className="font-semibold">
                TaskHive uses secure payment methods, including Stripe, for
                deposits and withdrawals. Workers can request withdrawals once
                they reach the minimum threshold for payout.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-borderColor border-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-2xl font-bold">
              Can I post tasks as a Buyer and work on tasks as a Worker
              simultaneously?
            </div>
            <div className="collapse-content">
              <p className="font-semibold">
                Yes, you can switch roles easily in your account settings. This
                allows you to post tasks as a Buyer while also completing tasks
                as a Worker.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-borderColor border-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-2xl font-bold">
              How do I get help if I have issues with my account?
            </div>
            <div className="collapse-content">
              <p className="font-semibold">
                You can contact our support team through the "Contact Us" page
                or email us directly. We’re here to help you with any
                account-related issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
