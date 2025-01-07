type TimelineItem = {
  title: string;
  description: string;
  date: string;
};

const timelineData: TimelineItem[] = [
  {
    title: "IT Specialist Intern",
    description:
      "I had the opportunity to work with Bunchful, a social enterprise focused on maximizing impact through philanthropy and sustainable development goals. During this internship, I managed Active Directory accounts and security groups for onboarding and offboarding processes, ensuring smooth transitions for 20+ employees. I also revamped the ticketing system in the GLPI support portal, optimizing ticket resolution workflows and escalation processes. Additionally, I designed and implemented a solution using Microsoft Forms and Teams to streamline operations for over 100 interns, making collaboration and organization seamless.",
    date: "May - August 2024",
  },
  {
    title: "CS Personal Projects",
    description:
      "This summer didn't go as planned—no internship this time around. Looking back, I wasn't as prepared as I hoped and mostly spent a lot of time trying to focus on graduating on time and catching up with classes. I regret not taking my time and really finding my passion for CS. However, during this summer, I was able to find a spark of enjoyment as I build beginner projects such as to-do lists and weather apps. Over the course of many failures and successes, I was able to develop work flow skills and became proficient in back-end and front-end languages.",
    date: "May - August 2023",
  },
  {
    title: "Official Switch to CS",
    description:
      "I officially changed my major to Computer Science this semester, taking my first ever CS course at this point in time!",
    date: "January 2023 - Present",
  },
  {
    title: "Rethinking My Path",
    description:
      "I spent the last few summers working in retail and hospital pharmacies and learning from my mentor in the pharmacy program. After a lot of thought and discussions with those close to me, I realized pharmacy just wasn’t the right fit for me.",
    date: "September 2022",
  },
  {
    title: "Pharmacy Program at Rutgers University",
    description:
      "I decided to commit to Rutgers and join their 6-year pharmacy program. Back then, I was pretty set on becoming a pharmacist and excited to see where it would take me.",
    date: "September 2020",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F7F9FC] py-16"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#747FE0] mb-12">
        Experiences & Timeline
      </h2>

      {/* Timeline Container */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#515F7F] before:to-transparent">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#515F7F] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-[#515F7F]">{item.title}</div>
                <time className="font-medium text-[#747FE0]">{item.date}</time>
              </div>
              <div className="text-[#515F7F]">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
