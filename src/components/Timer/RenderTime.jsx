import { Paper, Text } from "@mantine/core";

function RenderTime({ time }) {
  return (
    <div>
      <Paper>
        <Text>{time}</Text>
      </Paper>
    </div>
  );
}

export default RenderTime;
