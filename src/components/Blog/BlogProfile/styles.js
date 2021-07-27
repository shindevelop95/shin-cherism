import styled from 'styled-components/macro'

export const Container = styled.div`
    margin:50px 0;

`;

export const Frame = styled.div`
    width:86%;
    margin:0 auto;
`;

export const Image = styled.img`
    width:95%;
    height:auto;
    display:block;
    margin-left:${({marginLeft}) => marginLeft? marginLeft : null};

    @media (max-width:768px){
        display:initial;
        margin-left:initial;
         width:100%;
    }
`;

export const GroupItem = styled.div`
    margin-top:30px;
    margin-left:${({marginLeft}) => marginLeft? marginLeft: null};
     @media(max-width:768px){
       margin-left:initial;
    }
`;

export const Inner = styled.div`
    display:flex;
    align-items:center;
    margin:30px 0;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const Group = styled.div`
    flex:1;
     @media (max-width: 768px){
       width:100%;
    }
`;


export const Button = styled.button`
    font-size:30px;
    display:${({display}) => display? display :null};
    margin:0 auto;
    color:#eee;
    background-color:#91B9AE;
    padding:10px 60px;
    border:none;
    @media (max-width: 768px) {
        display:block;
        margin:0 auto;
    }
`;

export const Title = styled.h1`
    font-size:30px;
    text-transform:uppercase;
    margin:40px 0;
    color:#2b8068;
     @media(max-width:768px){
        width:100%;
        text-align:center;
    }
`;

export const Text = styled.p`
    font-size:20px;
    width:${({width}) => width?width:'initial'};
    @media(max-width:768px){
        width:100%;
        text-align:center;
    }
`;

