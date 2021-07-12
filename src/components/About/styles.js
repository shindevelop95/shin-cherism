import styled from 'styled-components/macro'

export const Container = styled.div`
    margin-top:200px;
    background-color:#eee;
    @media (max-width:768px){
        width:100%;
}

`;

export const Group = styled.div`
    width:800px;
  
    .video-js{
        margin-left:auto;
    }
    @media (max-width:768px){
        .video-js{
        
        margin-left:initial;
        margin:auto;
    }
    width:100%;
    }
`;

export const Frame = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    padding:80px 0;
    width:90%;
    margin:auto;
    @media (max-width:768px){
        .video-js{
        width:600px;
    }
    width:initial;
    flex-direction:column;
}
    
`;

export const Title = styled.h1`
    font-size:50px;
    color:#2b8068;

    @media (max-width:768px){
       font-size:30px;
       text-align:center;
       margin-top:50px;
    }
`;

export const Text = styled.p`
    font-size:25px;
    width:${({width}) => width? width:null};
    @media (max-width:768px){
        
       font-size:20px;
       width:400px;
       text-align:center;
       margin:auto;
    }
   
`;

export const Image = styled.img`
    height:${height => height ? height: null};
    width:${width => width ? width: null};
`;

export const LeftGroup = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const RightGroup = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position:relative;

    .abs{
        position:absolute;
        top:-1000px;
        height:1000px;
        width:900px;
    }
`;

export const OuterGroup = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    width:90%;
    padding:80px 0;
    margin:auto;

`;

export const Button = styled.button`
    background-color:transparent;
    border:none;
    font-size:25px;
    color:#2b8068;
`;