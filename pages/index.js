import React from 'react';
import Layout from '../components/MyLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '../components/MyTable';
// import Table from '../components/UiTable'
import ClientMembers from '../components/ClientMembers';
import ClientMembersDetails from '../components/ClientMembersDetails'
import CalcProgress from '../components/Enrichment/PlayerProgress'


const Index = props => (
    <Layout>
        <CssBaseline />
        <Table data={props.details}/>
    </Layout>
    // <React.Fragment>
    //     {console.log(props.details[0])}
    // </React.Fragment>
);

Index.getInitialProps = async function() {
    const membersList = await ClientMembers();
    console.debug('MembersList ===> ' + membersList.items.length)
    const membersDetailed = await ClientMembersDetails(membersList);
    const enrichedPlayers = await CalcProgress(membersDetailed);

    return {members: membersList, details: enrichedPlayers};
}

export default Index;