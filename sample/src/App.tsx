import My from "./components/spa-practice/My";
import "./App.css";
// import ParentButton from "./components/use-ref-hook-practice/ParentChildButton";
// import { ParentInput } from "./components/use-ref-hook-practice/ParentInput";
// import { CustomModal } from "./components/use-ref-hook-practice/CustomModal";
// import { CustomVideoPlayer } from "./components/use-ref-hook-practice/CustomVideoPalyer";
// import { CustomTextArea } from "./components/use-ref-hook-practice/CustomTextAreat";
// import { ChangeThemeButton } from "./components/context/TransDark";
import { SessionProvider } from "./components/spa-practice/SessionContext";
import { AutoCounter } from "./components/use-effect-hook-practice/AutoCounter";

function App() {

  return (
    <div>
    <div className="app-container">
      <SessionProvider><My/></SessionProvider>
    </div>
    {/* <ParentButton/>
    <ParentInput/>
    <CustomTextArea/>
    <CustomModal/>
    <CustomVideoPlayer/>
    <ChangeThemeButton/> */}
    <AutoCounter/>
    </div>
    
  );
}

export default App;