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
    flex-basis: 50%;
    flex-wrap:-ms-wrap;

    .video-js{
        
    }
    @media (max-width:768px){
        width:100%;
        .video-js{
            margin-left:initial;
            margin:auto;
            height:300px;
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
       font-size:30px;
       text-align:center;
       margin:auto;
      
    }
`;

export const Text = styled.p`
    font-size:2rem;
    width:${({width}) => width? width:null};
    @media (max-width:768px){
       font-size:2.5rem;
       width:100%;
       text-align:center;
       margin:20px auto;
    }
`;

export const Image = styled.img`
    height:${height => height ? height: null};
    width:${width => width ? width: null};
    @media (max-width:768px){
      height:500px;
      width:100%;
      margin-bottom:30px;
    }
`;

export const LeftGroup = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width:768px){
       
    }
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
    align-items: flex-end;
    width:90%;
    padding:80px 0;
    margin:auto;

    @media (max-width:768px){
      width:initial;
      margin:initial;
      flex-direction:column;
    }
`;

export const Button = styled.button`
    background-color:transparent;
    border:none;
    font-size:25px;
    color:#2b8068;

    @media (max-width:768px){
      display:block;
      margin:auto;
      font-size:15px;
      margin-bottom:20px;
    }
`;