import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"
import project3 from "../../assets/images/project3.png"
import "./Tabs.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const data = [
    {
        name:"Digi Events App",
        desc:"Leave the development of your bussiness ideas on us and enjoy it's growth",
        img: project1
    },
    {
        name:"Bani Mode App",
        desc:"Leave the development of your bussiness ideas on us and enjoy it's growth",
        img: project2
    },
    {
        name:"Online Handicraft App",
        desc:"Leave the development of your bussiness ideas on us and enjoy it's growth",
        img: project3
    }
]

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} centered onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="UI Design " {...a11yProps(1)} />
          <Tab label="Web Development" {...a11yProps(2)} />
          <Tab label="Mobile App" {...a11yProps(3)} />
          <Tab label="SEO" {...a11yProps(4)} />
          <Tab label="Branding" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='projects' >
            {
                data.map((item, index)=>{
                    return(
                        <div key={index} className='project-card' >
                            <div>
                                <img width="100%0%" alt="home" src={item.img} />
                            </div>
                            <div className='item-name' >
                                {item.name}
                            </div>
                            <div className='item-desc' >
                                {item.desc}
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Three
      </TabPanel>
    </Box>
  );
}
