import FeedbackPage from "./Feedback/FeedbackPage";
import HaveQuestions from "./HaveQuestions/HaveQuestions";
import HomeImages from "./HomeImages/HomeImages";
import IconsHome from "./Icons/IconsHome";
import NumberPage from "./Number/NumberPage";
import OurProjects from "./OurProjects/OurProjects";
import PipeRepair from "./PipeRepair/PipeRepair";
import PlumbingSolutions from "./PlumbingSolutions/PlumbingSolutions";
import SolvePlumbing from "./SolvePlumbing/SolvePlumbing";
export default function HomePage() {
  return (
    <>
      <SolvePlumbing />
      <PlumbingSolutions />
      <PipeRepair />
      <OurProjects />
      <IconsHome />
      <HaveQuestions />
      <FeedbackPage />
      <NumberPage /> 
      <HomeImages />
    </>

  )
}
