
export default {
    data() {
        return {
            serverAddress: "http://localhost:3000/",
            reqIsReady: false
        }
    },
    methods: {
        _srvProcessStatus(response) {
            if (response.status === 200 || response.status === 0) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error("Error loading"))
            }
        },
        _srvParseBlob(response) {
            return response.blob();
        },
        async _srvJsonRequest(apiAddress, body = {}) {
            const address = this.serverAddress + apiAddress
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            };

            const response = await fetch(address, requestOptions);
            const data =  await response.json();
            this.reqIsReady = true
            return data
        },
        async _srvFileRequest(apiAddress, body = {}) {
            const address = this.serverAddress + apiAddress
            const requestOptions = {
                method: "POST",
                body
            };

            const response = await fetch(address, requestOptions);
            const data =  await response.json();
            this.reqIsReady = true
            return data
        }
    }
}