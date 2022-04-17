import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import BGColor from '../artifacts/contracts/BGColor.sol/BGColor.json';

const getContract = async (use_metamask = false) => {
    let signerOrProvider = null;
    if(use_metamask){
        let provider = await detectEthereumProvider();
        if(!provider)
            return false;
        await provider.request({ method: 'eth_requestAccounts' });
        provider = new ethers.providers.Web3Provider(provider);
        signerOrProvider = provider.getSigner();
    }else{
        signerOrProvider = new ethers.providers.JsonRpcProvider(process.LOCAL_BLOCKCHAIN_RPC_URL);
    }
    console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
    const contract = new Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        BGColor.abi,
        signerOrProvider
    );
    return contract;
}

export default getContract;