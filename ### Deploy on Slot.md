### Deploy on Slot

1. **Delete Existing Deployments**: Remove the instances of Katana and Torii slots:

    ```
    slot deployments delete aa-amegakure katana
    slot deployments delete aa-amegakure torii
    ```

2. **Create Katana Instance**: Generate a new instance of Katana slot with specific configurations:

    ```
    slot d create aa-amegakure katana -v v0.5.1 --disable-fee true
    ```

3. **Read Katana Logs**: Retrieve account address and private key from the logs of Katana:

    ```
    slot deployments logs aa-amegakure katana
    ```

4. **Update scarb.toml**: Modify the fields (rpc_url, account_address, private_key) in scarb.toml file.

5. 
    ```
    sozo build && sozo migrate --name aa-amegakure
    ```

6. **Add World Address and Create Torii Instance**: Include the address of the world and create an instance of Torii slot:

    ```
    slot d create aa-amegakure torii --rpc https://api.cartridge.gg/x/aa-amegakure/katana --world 0x5032bd4928e93b307934bde8164d88bef42bd4618893d7184f7c9ef26118c9e -v v0.5.1 --start-block 0
    ```

7. ./scripts/default_auth.sh