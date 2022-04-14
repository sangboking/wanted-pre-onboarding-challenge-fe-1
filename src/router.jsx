import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Join from './JoinLogin/Join/Join';
import Login from './JoinLogin/Login/Login';
import FindId from './JoinLogin/FindId/FindId';
import FindPw from './JoinLogin/FindPw/FindPw';
import ConfirmId from './JoinLogin/ConfirmId/ConfirmId';
import ChangePw from './JoinLogin/ChangePw/ChangePw';
import JoinOut from './JoinLogin/JoinOut/JoinOut';

import SceduleWeek from './Scedule/SceduleWeek/SceduleWeek';
import SceduleMonth from './Scedule/SceduleMonth/SceduleMonth';
import SceduleStream from './Scedule/SceduleStream/SceduleStream';

import InsightFb from './Insight/InsightFb/InsightFb';
import InsightInstar from './Insight/InsightInstar/InsightInstar';
import InsightTwit from './Insight/InsightTwit/InsightTwit';

import InboxMessage from './Inbox/InboxMessage/InboxMessage';
import InboxComnet from './Inbox/InboxComment/InboxComnet';

import Connect from './Connect/Connect';
import MyInfo from './Setting/MyInfo';


const router = () => {
    return (
        <BrowserRouter>
          <Routes>
           <>
            {/* join,login */}
            <Route path="/join" element={<Join/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/findId" element={<FindId/>}/>
            <Route path="/findPw" element={<FindPw/>}/>
            <Route path="/confirmId" element={<ConfirmId/>}/>
            <Route path="/changePw" element={<ChangePw/>}/>
            <Route path="/joinout" element={<JoinOut/>}/>

            {/* Scedule */}
            <Route path="/scedule/week" element={<SceduleWeek/>}/>
            <Route path="/scedule/month" element={<SceduleMonth/>}/>
            <Route path="/scedule/stream" element={<SceduleStream/>}/>

            {/* Insight */}
            <Route path='/insight/fb' element={<InsightFb/>}></Route>
            <Route path='/insight/instar' element={<InsightInstar/>}></Route>
            <Route path='/insight/twit' element={<InsightTwit/>}></Route>

            {/* Inbox */}
            <Route path='/inbox/message' element={<InboxMessage/>}></Route>
            <Route path='/inbox/comment' element={<InboxComnet/>}></Route>

            {/* Connect */}
            <Route path='/connect' element={<Connect/>}></Route>

            {/* Home */}
            <Route path="/" element={<Home/>}/>

            {/* Setting */}
            <Route path='/info' element={<MyInfo/>}></Route>

           </>
          </Routes>
        </BrowserRouter>
    );
};

export default router;