import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const reset = css `
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`

const flexRow = css `
    display: flex;
    flex-direction: row;
`

const flexCol = css `
    display: flex;
    flex-direction: column;
`

export const MainWrap = styled.div `
    ${flexCol};
    justify-content: space-between;
    width: 1200px;
    padding: 60px 80px;
`

export const TitleWrap = styled.div `
    ${flexCol};
    align-items: center;
    margin-bottom: 80px;
`

export const Title = styled.h1 `
    margin: 0;
    padding: 0;
    font-size: 36px;
    font-weight: 700;
`

export const UserInputWrap = styled.div `
    ${flexRow};
    justify-content: space-between;
    margin-bottom: 40px;
` 

// export const UserInputFormWrap = styled.div `
//     ${flexCol};
//     justify-content: space-between;
//     width: calc(50% - 15px);
// `

export const UserInputFormWrap = styled.div `
    width: calc(50% - 15px);
`

export const InputName = styled.div `
    display: block;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
`

export const BasicInput = styled.input `
    width: 100%;
    height: 52px;
    padding: 0 0 0 15px;
    border: 1px solid #BDBDBD;
    margin-bottom: 5px;

    &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #C4C4C4;
    }
`

export const ErrorBox = styled.div `
    font-size: 14px;
    color: red;
`

export const PostTitleWrap = styled.div `
    margin-bottom: 40px;
`

export const PostContentWrap = styled.div `
    margin-bottom: 40px;
`

export const ContentInput = styled.textarea `
    width: 100%;
    height: 480px;
    padding: 15px 0 0 15px;
    border: 1px solid #BDBDBD;
    margin-bottom: 5px;
    resize: none;

    &::placeholder {
        font-size: 16px;
        color: #C4C4C4;
    }
`

export const AddressInputFormWrap = styled.div `
    ${flexCol};
    justify-content: space-between;
    margin-bottom: 40px;
`

export const ZipCodeInputWrap = styled.div `
    ${flexRow};
    justify-content: space-between;
    width: 20%;
    margin-bottom: 15px;
`

export const ZipCodeInput = styled.input `
    width: 35%;
    height: 52px;
    padding: 0;
    border: 1px solid #BDBDBD;
    text-align: center;

    &::placeholder {
        text-align: center;
        font-size: 16px;
        color: #C4C4C4;
    }
`

export const ZipCodeSearchBtn = styled.button `
    width: 60%;
    height: 52px;
    padding: 0;
    border: 1px solid black;
    background-color: black;
    font-size: 16px;
    font-weight: 500;
    color: white;
    cursor: pointer;
`

export const YoutubeInputWrap = styled.div `
    margin-bottom: 40px;
`

export const AttachImageWrap = styled.div `
    margin-bottom: 40px;
`

export const AttachBtnWrap = styled.div `
    ${flexRow};
    justify-content: space-between;
    width: 27%;
`

export const AttachBtn = styled.button `
    width: 78px;
    height: 78px;
    border: none;
    background-image: url("/boards/new/uploadbtn.png");
    background-size: cover;
    cursor: pointer;
`

export const SettingWrap = styled.div `
    margin-bottom: 80px;
`

export const CheckBoxWrap = styled.div `
    ${flexRow};
    justify-content: space-between;
    width: 15%;
`

export const SettingCheckLabel = styled.label `
    font-size: 16px;
    font-weight: 500;

    &::before {
        content: "";
        box-sizing: border-box;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border: 1px solid black;
        border-radius: 50%;
        vertical-align: -3px;
    }
`

export const SettingCheckBox = styled.input `
    display: none;
`

export const SubmitBtnWrap = styled.div `
    ${flexRow};
    justify-content: center;
`

export const SubmitBtn = styled.button `
    width: 179px;
    height: 52px;
    padding: 0;
    border: none;
    background: #FFD600;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:disabled {
        background: #BDBDBD;
        cursor: auto;
    }
`