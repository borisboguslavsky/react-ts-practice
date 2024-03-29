import { useState } from "react";

import { Box, Button, Typography, Paper, Grid, GridTypeMap, GridProps } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type AppletProps = {
  title: string;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
} & GridProps;

const Applet: React.FC<AppletProps> = ({ title, description, children, xs = 12, lg = 4, md = 6 }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Grid item xs={xs} lg={lg} md={md}>
      <Paper
        elevation={12}
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          {description && (
            <Button
              onClick={() => setShowDescription((bool) => !bool)}
              sx={{
                minWidth: "unset",
                padding: "4px",
                border: `1px solid rgba(0, 0, 0, 0.125)`,
              }}
            >
              <QuestionMarkIcon sx={{ opacity: 0.625 }} />
            </Button>
          )}
        </Box>
        {description &&
          showDescription &&
          (typeof description === "string" ? (
            <Typography variant="body2" sx={{ marginBottom: "2rem" }}>
              {description}
            </Typography>
          ) : (
            description
          ))}
        <Box
          sx={{
            marginTop: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {children}
        </Box>
      </Paper>
    </Grid>
  );
};

export default Applet;
