import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Join from './Pages/Accounts/Join/Join';
import Login from './Pages/Accounts/Login/Login';
import FindId from './Pages/Accounts/FindId/FindId';
import FindPw from './Pages/Accounts/FindPw/FindPw';
import ConfirmId from './Pages/Accounts/ConfirmId/ConfirmId';
import ChangePw from './Pages/Accounts/ChangePw/ChangePw';
import JoinOut from './Pages/Accounts/JoinOut/JoinOut';

import SceduleWeek from './Pages/Scedule/SceduleWeek/SceduleWeek';
import SceduleMonth from './Pages/Scedule/SceduleMonth/SceduleMonth';
import SceduleStream from './Pages/Scedule/SceduleStream/SceduleStream';

import InsightFb from './Pages/Insight/InsightFb/InsightFb';
import InsightInsta from './Pages/Insight/InsightInsta/InsightInsta';
import InsightTwit from './Pages/Insight/InsightTwit/InsightTwit';

import InboxMessage from './Pages/Inbox/InboxMessage/InboxMessage';
import InboxComnet from './Pages/Inbox/InboxComment/InboxComnet';

import Connect from './Pages/Connect/Connect';
import MyInfo from './Pages/Setting/MyInfo';


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
            <Route path="/sceduleWeek/:brandId" element={<SceduleWeek/>}/>
            <Route path="/sceduleMonth/:brandId" element={<SceduleMonth/>}/>
            <Route path="/sceduleStream/:brandId" element={<SceduleStream/>}/>

            {/* Insight */}
            <Route path='/insightFb/:brandId' element={<InsightFb/>}></Route>
            <Route path='/insightInsta/:brandId' element={<InsightInsta/>}></Route>
            <Route path='/insightTwit/:brandId' element={<InsightTwit/>}></Route>

            {/* Inbox */}
            <Route path='/inboxMessage/:brandId' element={<InboxMessage/>}></Route>
            <Route path='/inboxComment/:brandId' element={<InboxComnet/>}></Route>

            {/* Connect */}
            <Route path='/connect/:brandId' element={<Connect/>}></Route>

            {/* Home */}
            <Route path="/" element={<Home/>}/>

            {/* Setting */}
            <Route path='/info/:brandId' element={<MyInfo/>}></Route>
           </>
          </Routes>
        </BrowserRouter>
    );
};

export default router;