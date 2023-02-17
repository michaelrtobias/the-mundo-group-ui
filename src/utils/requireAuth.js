import { Box, LinearProgress, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

const RequireAuth = ({ children, isAdmin, isAuthFinished }) => {
  useEffect(() => {
    if (!isAdmin) {
      Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.COGNITO,
      });
    }
  }, [isAdmin, isAuthFinished]);

  return (
    <>
      {isAdmin ? (
        children
      ) : (
        <Box justifyContent="center" alignItems="center" minHeight="80vh">
          <Stack>
            <LinearProgress
              variant="query"
              sx={{ margin: "45vh 20vw", height: "1em" }}
            />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default RequireAuth;
