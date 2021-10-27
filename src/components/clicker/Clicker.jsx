import React from "react"
import fold3 from "./assets-clicker/fold-3.png"
import galaxy_unpacked from "./assets-clicker/one_ui.png"
import galaxy_watch4 from "./assets-clicker/band.png"
import galaxy_buds from "./assets-clicker/buds.png"
import flip3 from "./assets-clicker/flip-3.png"
import "./Clicker.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
const Clicker = () => {
  return (
  <Tabs className="btn">
  <TabList>
    <Tab>Galaxy Z Fold3 5G</Tab>
    <Tab>Galaxy Unpacked Replay</Tab>
    <Tab>Galaxy Watch4</Tab>
    <Tab>Galaxy Buds2</Tab>
    <Tab> Galaxy Z Flip3 5G</Tab>
  </TabList>

  <TabPanel>
    <h2><img src={fold3}/></h2>
  </TabPanel>
  <TabPanel>
    <h2><img src={galaxy_unpacked }/></h2>
  </TabPanel>
  <TabPanel>
    <h2><img src={galaxy_watch4}/></h2>
  </TabPanel>
  <TabPanel>
    <h2><img src={galaxy_buds}/></h2>
  </TabPanel>
  <TabPanel>
    <h2><img src={flip3}/></h2>
  </TabPanel>
</Tabs>
  )
}
export default Clicker;