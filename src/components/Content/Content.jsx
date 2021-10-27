import React from "react";
import "./Content.css";
import S21 from "./assets-content/latest-deals/S21.png";
import watch from "./assets-content/latest-deals/Watch.jpg";
import table from "./assets-content/latest-deals/table.png";
import note from "./assets-content/latest-deals/notebook.png";
import fridge from "./assets-content/latest-deals/fridge.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

let Content = () => {
  return (
    <content>
      <div className="Innovation">Newest Offers and Innovations</div>
      {/* <div className="Innovation-2">Latest deals</div>
      <div className="Innovation-3">Mobile</div>
      <div className="Innovation-4">TV&AV</div>
      <div className="Innovation-5">Appliances</div>
      <div className="Innovation-6">Computing</div> */}
      {/* <div className="figure-S21">
        <img src={S21} className="model-S21" />
        <div className="Save-150">Save 150$</div>
        <div>on Galaxy S21 5G smartphones</div>
      </div>
      <div className="figure-watch">
        <img src={watch} className="model-watch" />
        <div className="Get-credit">
          Get a credit of $50 plus trade-in value
        </div>
        <div className="buy-watch">when you buy Galaxy Watch4 Series</div>
      </div>
      <div className="figure-table">
        <img src={table} className="model-table" />
        <div className="book-cover">Get 50% off Book Cover Keyboard Slim</div>
        <div className="buy-table">when you buy Galaxy Tab 7 FE</div>
      </div>
      <div className="figure-note">
        <img src={note} className="model-note" />
        <div className="Save-150-2">Save 150$</div>
        <div className="galaxy-book">on select galaxy book</div>
      </div>
      <div className="figure-fridge">
        <img src={fridge} className="model-fridge" />
        <div className="respirator-fridge">BESPOKE Refrigerators</div>
        <div className="buy-1">Buy 1, Get 1 panel as a bonus*</div>
      </div> */}

      <Tabs className="panel_main_menu">
        <TabList className="panel_inscription">
          <Tab>Samsung Week</Tab>
          <Tab>Latest deals</Tab>
          <Tab>Mobile</Tab>
          <Tab>TV&AV</Tab>
          <Tab>Appliances</Tab>
          <Tab>Computing</Tab>
        </TabList>

        <TabPanel className="panel_latest_deals">
        <div className="figure-S21">
        <img src={S21} className="model-S21" />
        <div className="Save-150">Save 150$</div>
        <div>on Galaxy S21 5G smartphones</div>
      </div>
      <div className="figure-watch">
        <img src={watch} className="model-watch" />
        <div className="Get-credit">
          Get a credit of $50 plus trade-in value
        </div>
        <div className="buy-watch">when you buy Galaxy Watch4 Series</div>
      </div>
      <div className="figure-table">
        <img src={table} className="model-table" />
        <div className="book-cover">Get 50% off Book Cover Keyboard Slim</div>
        <div className="buy-table">when you buy Galaxy Tab 7 FE</div>
      </div>
      <div className="figure-note">
        <img src={note} className="model-note" />
        <div className="Save-150-2">Save 150$</div>
        <div className="galaxy-book">on select galaxy book</div>
      </div>
      <div className="figure-fridge">
        <img src={fridge} className="model-fridge" />
        <div className="respirator-fridge">BESPOKE Refrigerators</div>
        <div className="buy-1">Buy 1, Get 1 panel as a bonus*</div>
      </div>
        </TabPanel>
        <TabPanel className="panel_latest_deals">
        <div className="figure-S21">
        <img src={S21} className="model-S21" />
        <div className="Save-150">Save 150$</div>
        <div>on Galaxy S21 5G smartphones</div>
      </div>
      <div className="figure-watch">
        <img src={watch} className="model-watch" />
        <div className="Get-credit">
          Get a credit of $50 plus trade-in value
        </div>
        <div className="buy-watch">when you buy Galaxy Watch4 Series</div>
      </div>
      <div className="figure-table">
        <img src={table} className="model-table" />
        <div className="book-cover">Get 50% off Book Cover Keyboard Slim</div>
        <div className="buy-table">when you buy Galaxy Tab 7 FE</div>
      </div>
      <div className="figure-note">
        <img src={note} className="model-note" />
        <div className="Save-150-2">Save 150$</div>
        <div className="galaxy-book">on select galaxy book</div>
      </div>
      <div className="figure-fridge">
        <img src={fridge} className="model-fridge" />
        <div className="respirator-fridge">BESPOKE Refrigerators</div>
        <div className="buy-1">Buy 1, Get 1 panel as a bonus*</div>
      </div>
        </TabPanel>
      </Tabs>
      <div className="mobile-fold-3">Mobile</div>
    </content>
  );
};

export default Content;
