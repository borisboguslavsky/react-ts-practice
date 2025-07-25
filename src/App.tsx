import Applet from "./components/Applet";
import ReactUseContext from "./components/UseContext/ReactUseContext";
import Calculator from "./components/Calculator/Calculator";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import TodoList from "./components/ToDoList/ToDoList";
import Login from "./components/Login/Login";
import ReactUseReducer from "./components/Reducer/ReactUseReducer";
import ReactHookForm from "./components/ReactHookForm/ReactHookForm";
import XStateVendingMachine from "./components/VendingMachine/XStateVendingMachine";
import TanstackQuery from "./components/TanstackQuery/TanstackQuery";
import ProbabilityEditor from "./components/ProbabilityEditor/ProbabilityEditor";
import Grid from "@mui/material/Grid";

type AppletMetadata = {
  title: string;
  description: string;
  component: () => JSX.Element;
  show: boolean;
};

const APPLETS: Record<string, AppletMetadata> = {
  ["Probability Editor"]: {
    title: "Probability Editor",
    description:
      "A probability curve editor and visualizer, with a random number generator that's based on the visualized curve.",
    component: ProbabilityEditor,
    show: true,
  },
  ["XState Vending Machine"]: {
    title: "X-State Vending Machine",
    description: "A vending machine demo that uses state machine built with the XState library.",
    component: XStateVendingMachine,
    show: true,
  },
  ["Calculator"]: {
    title: "Calculator",
    description:
      "A basic calculator app where users can add, subtract, multiply, and divide two numbers.",
    component: Calculator,
    show: true,
  },
  ["TanStack Query"]: {
    title: "TanStack Query",
    description:
      "A component that uses @tanstack/react-query to fetch data from the swapi.dev REST API.",
    component: TanstackQuery,
    show: true,
  },
  ["React-Hook-Form"]: {
    title: "React-Hook-Form",
    description:
      "A component that uses the react-hook-form library to control the overall form and yup for client-side validation.",
    component: ReactHookForm,
    show: true,
  },
  ["Stopwatch"]: {
    title: "Stopwatch",
    description:
      "A basic stopwatch component where users can pause/resume the timer and record/clear lap times.",
    component: Stopwatch,
    show: true,
  },
  ["Todo List"]: {
    title: "Todo List",
    description: "A basic ToDo list component where users can add and remove items to the list.",
    component: TodoList,
    show: true,
  },
  ["Mock Login"]: {
    title: "Mock Login",
    description:
      "A login form with basic validation that sends a request to https://jsonplaceholder.typicode.com/ if the form is valid and outputs the response in the textarea below.",
    component: Login,
    show: true,
  },
  ["Context"]: {
    title: "React useContext()",
    description:
      "An example of how the useContext() hook can be used to access/update app-wide state via a custom Provider component.",
    component: ReactUseContext,
    show: true,
  },
  ["Reducer"]: {
    title: "React useReducer()",
    description: "An example of how the useReducer() hook can be used to execute complex actions.",
    component: ReactUseReducer,
    show: true,
  },
};

const App = () => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, maxWidth: "1120px", p: 2 }}>
      {Object.entries(APPLETS).map(([key, applet]) => {
        if (!applet.show) return null;
        return (
          <Applet
            key={key}
            title={applet.title}
            description={applet.description}
            component={applet.component}
          />
        );
      })}
    </Grid>
  );
};

export default App;
