import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">テキスト</Button>
      <Button
        variant="contained"
        sx={{
          background: "#00b4ed",
          color: "black",
          ":hover": { background: "#ffffff" },
        }}
        size="large"
      >
      </Button>
      <Button
        variant="contained"
        sx={{
          background: "#efea30",
          color: "black",
          ":hover": { background: "#ffffff" },
        }}
        size="large"
      >
      </Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
