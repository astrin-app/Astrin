import { Button } from "@nextui-org/react";
import { useSignal } from "@preact/signals-react";
import { Alert, IsEmpty, OpenDirectory } from "../wailsjs/go/main/App"

function openDir() {
  var myfun = async () => {
    var dir = await OpenDirectory()
    var bool = await IsEmpty(dir)
    if (!bool) {
      Alert("Directory Not Empty!")
    }
  };
  myfun()
}

function App() {
  const count = useSignal(0);
  return (
    <div>
      <Button color="primary" onClick={openDir}>
        Count up {count.value}
      </Button>
    </div>
  )
}

export default App
