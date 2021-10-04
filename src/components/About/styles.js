import styled from 'styled-components/macro'

export const Container = styled.div`
   margin-top:200px;
   @media (max-width:768px){
        width:100%;
    }
`;

export const WrapperFirst = styled.div`
    background-color:#eee;
    align-items: center;
    justify-content: space-between;
`;

export const Group = styled.div`
    flex:0 0 50%;
    flex-wrap:-ms-wrap;

    .video-js{
        width:45rem;
    }
    @media (max-width:768px){

        &:nth-child(2){
            padding:2rem;
        }
        &:not(:last-child){
            margin-bottom:3rem;
        }
        width:100%;
        .video-js{
            margin:auto;
        }
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
        width:100%;
    }
    width:initial;
    flex-direction:column;
}  
`;

export const Title = styled.h1`
    font-size:3rem;
    color:#2b8068;
    text-transform:uppercase;

    @media (max-width:768px){
       text-align:center;
       margin:auto;
      
    }
`;

export const Text = styled.p`
    font-size:2rem;
    margin:3rem 0;
    @media (max-width:768px){
       font-size:2.5rem;
       width:100%;
       text-align:center;
       margin:20px auto;
    }
`;

export const Image = styled.img`
    width:100%;
`;

export const LeftGroup = styled.div`
    flex:0 0 45%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width:768px){
       
    }
`;

export const TextGroup = styled.div`
    margin:5rem 0;
`;


export const RightGroup = styled.div`
    flex:0 0 45%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position:relative;
    transform:translateY(-20%);

    .abs{
        min-height:80rem;
    }

    @media (max-width:768px){
        flex-direction:column-reverse;
      .abs{
          display:none;
          justify-content: center;
          align-items: center;
      }
    }
`;

export const WrapperSecond = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
    margin:auto;
`;

export const Button = styled.button`
    background-color:transparent;
    border:none;
    font-size:2rem;
    color:#2b8068;

    @media (max-width:768px){
      display:block;
      margin:auto;
      font-size:15px;
      margin-bottom:20px;
    }
`;