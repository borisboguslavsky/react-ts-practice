import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box } from "@mui/system";
import { Button, TextField, Typography, Checkbox } from "@mui/material";
import React, { useReducer } from "react";

interface ReducerState {
  field1: string;
  field2: string;
  field3: string;
  allFieldsPopulated: boolean;
}

type ReducerTypes = "CHANGE" | "REVERSE" | "UPPER" | "LOWER" | "RESET";

interface RedcuerAction {
  type: ReducerTypes;
  field?: string;
  value?: string;
}

const reducerFunction = (state: ReducerState, action: RedcuerAction) => {
  if (action.type === "CHANGE") {
    let newState: ReducerState = {
      ...state,
      allFieldsPopulated: true,
      [action.field as keyof ReducerState]: action.value,
    };
    Object.keys(newState).forEach((key) => {
      if (newState[key as keyof ReducerState] === "") {
        newState.allFieldsPopulated = false;
      }
    });
    return newState;
  }
  if (action.type === "REVERSE") {
    return {
      field1: state.field1.split("").reverse().join(""),
      field2: state.field2.split("").reverse().join(""),
      field3: state.field3.split("").reverse().join(""),
      allFieldsPopulated: state.allFieldsPopulated,
    };
  }
  if (action.type === "UPPER") {
    return {
      field1: state.field1.toUpperCase(),
      field2: state.field2.toUpperCase(),
      field3: state.field3.toUpperCase(),
      allFieldsPopulated: state.allFieldsPopulated,
    };
  }
  if (action.type === "LOWER") {
    return {
      field1: state.field1.toLowerCase(),
      field2: state.field2.toLowerCase(),
      field3: state.field3.toLowerCase(),
      allFieldsPopulated: state.allFieldsPopulated,
    };
  }
  if (action.type === "RESET") {
    return {
      field1: "it's rough",
      field2: "it's coarse",
      field3: "and it gets everywhere",
      allFieldsPopulated: true,
    };
  }
  return state;
};

const ReactUseReducer = () => {
  const initialState: ReducerState = {
    field1: "it's rough",
    field2: "it's coarse",
    field3: "and it gets everywhere",
    allFieldsPopulated: true,
  };
  const [formState, dispatchForm] = useReducer(reducerFunction, initialState);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let field = e.target.id;
    let value = e.target.value;
    dispatchForm({ type: "CHANGE", field: field, value: value });
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Field 1"
          InputLabelProps={{ shrink: true }}
          id="field1"
          value={formState.field1}
          onChange={changeHandler}
        />
        <TextField
          label="Field 2"
          InputLabelProps={{ shrink: true }}
          id="field2"
          value={formState.field2}
          onChange={changeHandler}
        />
        <TextField
          label="Field 3"
          InputLabelProps={{ shrink: true }}
          id="field3"
          value={formState.field3}
          onChange={changeHandler}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button fullWidth variant="outlined" onClick={() => dispatchForm({ type: "REVERSE" })}>
            <SwapHorizIcon />
          </Button>
          <Button fullWidth variant="outlined" onClick={() => dispatchForm({ type: "UPPER" })}>
            <ArrowUpwardIcon />
          </Button>
          <Button fullWidth variant="outlined" onClick={() => dispatchForm({ type: "LOWER" })}>
            <ArrowDownwardIcon />
          </Button>
        </Box>
        <Button variant="contained" onClick={() => dispatchForm({ type: "RESET" })}>
          Reset
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <Checkbox readOnly disabled checked={formState.allFieldsPopulated} /> */}
        <Typography variant="caption">
          All fields populated: {formState.allFieldsPopulated ? "TRUE" : "FALSE"}
        </Typography>
      </Box>
    </>
  );
};

export default ReactUseReducer;
