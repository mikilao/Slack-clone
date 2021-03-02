import MessageIcon from '@material-ui/icons/Message';
import DraftsIcon from '@material-ui/icons/Drafts';
import SaveIcon from '@material-ui/icons/Save';
import InboxIcon from '@material-ui/icons/Inbox';
import MoreIcon from '@material-ui/icons/More';
import PeopleIcon from '@material-ui/icons/People';

export const sidebarItemsData = [
    {
icon: <MessageIcon/>,
text:"Thread"
    },
    {
        icon: <InboxIcon/>,
        text:"All DMs"
            },
            {
                icon: <DraftsIcon/>,
                text:"Mentions & Reactions"
                    },
                    {
                        icon: <SaveIcon/>,
                        text:"Save Items"
                         },
                         {
                            icon: <PeopleIcon/>,
                            text:"People & Groups"
                             },
                             
                         {
                            icon: <MoreIcon/>,
                            text:"More"
                                }

]