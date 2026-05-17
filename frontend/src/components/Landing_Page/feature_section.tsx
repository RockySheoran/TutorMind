import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaUserTie,
  FaQuestionCircle,
  FaNewspaper,
  FaCompass,
} from "react-icons/fa";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-200 dark:border-green-700 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="text-blue-600 dark:text-green-400 text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <FaFilePdf />,
      title: "PDF Summarization",
      description:
        "Upload any PDF document and get an AI-generated summary with key points and concepts highlighted for efficient studying.",
    },
    {
      icon: <FaUserTie />,
      title: "Interview Preparation",
      description:
        "Practice for both personal and technical interviews with AI-generated questions and feedback on your responses.",
    },
    {
      icon: <FaQuestionCircle />,
      title: "Quiz & QnA Generator",
      description:
        "Generate custom quizzes and question-answer sets on any topic to test your knowledge and identify areas for improvement.",
    },
    {
      icon: <FaNewspaper />,
      title: "Current Affairs",
      description:
        "Stay updated with the latest news and events with AI-curated summaries and analysis of current affairs.",
    },
    {
      icon: <FaCompass />,
      title: "Topic Explorer",
      description:
        "Dive deep into any subject with AI-guided exploration that helps you understand complex topics through structured learning paths.",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600 mb-16 drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
          {/* Additional card to make it 2x3 grid */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 shadow-lg text-white h-full flex flex-col justify-center border border-blue-400 dark:border-green-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="mb-6 text-white/90 leading-relaxed">
              Join thousands of students who are already using TutorMind to
              enhance their learning experience.
            </p>
            <button
              onClick={() => (window.location.href = "/signup")}
              className="bg-white text-blue-700 font-bold py-2 px-6 rounded-xl hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
            >
              Sign Up Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
