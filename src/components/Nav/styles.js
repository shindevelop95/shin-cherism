import styled from 'styled-components'

export const Container = styled.div`
    position:sticky;
    top:0;
    z-index:1000;
    width:100%;
    background-color:${({display}) => display? 'rgba(43,128,104,.9)':'#91b9ae'};
    padding:15px 0;
  
    @media (max-width: 768px) {
        height:20px;
        padding:30px 0;
        span{
            display:block;
        }
        
        .active{   
            display:block;
            color:white;
            font-size:30px;
            text-align:center;
            background-color:#91b9ae;
            z-index:30;
            height:100vh;
        }
        .MuiSvgIcon-root{
            display:inline-block;
            position:absolute;
            right:10%;
            top:1%;
            font-size:45px;
            margin-left:flex;
            z-index:50;
            color:#eee;
            margin-top:10px;
            cursor:pointer;   
    }
  }
`;

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
    margin:auto;
`;

export const Input = styled.input`
    width:${({search}) => search? '260px':'0px'};
    opacity:${({search}) => search? '1':'0'};
    height:29px;
    padding:5px 15px;
    color:#eee;
    transition:.5s;
    border-radius:10px;
    background-color:transparent;
    border:2px solid #eee;
    &:focus{
        outline:none;
    }
    ::placeholder{
        color:#eee;
        font-size:15px;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items:center;
    width:10%;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        display:none;
  }
 
`;

export const TextGroup = styled.div`
    width:50%;
    color:#eee;
    
    .MuiSvgIcon-root{
        display:none;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        height:auto;
        width:100%;
        cursor:pointer;

  }
`;

export const TextGroupInner = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
   
   @media (max-width: 768px) {
        display:none;
  }
`;
export const Button = styled.button`
    background-color: transparent;
    color:#eee;
    font-size:20px;
    border:none;
    margin-right:10px;
    cursor:pointer;
    transition:.5s;
    &:hover{
        transform:scale(1.2);
    }
    .MuiSvgIcon-root{
        height:40px;
        width:40px;
    }


`;

export const Text = styled.h3`
    transition:.5s;
    font-size:25px;
    cursor: pointer;

    &:hover{
        transform:scale(1.2);
    }
    @media(max-width:768px){
        &:first-child{
            padding-top:140px;
        }
    }
    `;


export const ButtonToggle = styled.div`
    display:none;
    @media (max-width: 768px) {
        display:block;
       
  }
`;


