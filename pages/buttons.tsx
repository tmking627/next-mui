import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">テキスト</Button>
      <Button variant="contained" size="large">
        100名の人材を表示
      </Button>
      <Button variant="contained" color="secondary" size="large">
        100名の人材を表示
      </Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
