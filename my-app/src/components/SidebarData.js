import React from 'react'
import '../App.css';
import HomeIcon from '@mui/icons-material/Home';
import TokenIcon from '@mui/icons-material/Token';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import BallotIcon from '@mui/icons-material/Ballot';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "Tokens",
        icon: <TokenIcon />,
        link: "/tokens",
    },
    {
        title: "Proposals",
        icon: <HowToVoteOutlinedIcon/>,
        link: "/proposals",
    },
    {
        title: "Groups",
        icon: <GroupsIcon />,
        link: "/groups",
    },
    {
        title: "Voting",
        icon: <BallotIcon />,
        link: "/voting",
    },
    {
        title: "Stats",
        icon: <DashboardIcon />,
        link: "/stats",
    },
]


 