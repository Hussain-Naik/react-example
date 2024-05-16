// import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
// import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
// import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
// import NestingComponents from "./components/NestingComponents";
// import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
// import RenderingLists from "./components/RenderingLists";
// import LifeCyclesCDM from "./components/LifeCyclesCDM";
// import LifeCyclesCDU from "./components/LifeCyclesCDU";
// import LifeCyclesCWU from "./components/LifeCyclesCWU";
// import ControlledForm from './components/ControlledForm';
// import { SearchBar3 } from './components/SearchBar3';
// import HooksCounter from './components/HooksCounter';
// import ClassCounter from "./components/ClassCounter";
// import ControlledFormHooks from './components/ControlledFormHooks';
// import UseStateWithArrays from './components/UseStateWithArrays';
// import UseStateWithObjects from './components/UseStateWithObjects';
// import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <EventsFunctional />
      <EventsClass />
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Mike" age='32' />
      <StatefulGreeting greeting='Am a stateful class component'/>
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
      <NestingComponents />
      <MethodsAsPropsParent />
      <RenderingLists />
      <LifeCyclesCDM />
      <LifeCyclesCDU />
      <LifeCyclesCWU />
      <ControlledForm />
      <SearchBar3 />
      <HooksCounter />
      <ClassCounter />
      <ControlledFormHooks />
      <UseStateWithArrays />
      <UseStateWithObjects />
      <UseEffectCounter /> */}
      <UseEffectCounterContainer />
      <HTTPRequests />
      <HTTPPost />
      <HTTPHooks />
    </div>
  );
}

export default App;
