import { Viz } from "../newapi/Viz";

const url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms";

const viz = Viz({
  url,
  width: 800,
  height: 600,
  container: document.querySelector("#container"),
});
