import http from "../http-common";

class CommandService {
  sendCommand(command) {
    return http.get(`/${command}`);
  }
  sendMotorCommand(action, command) {
    return http.get(`/${action}/${command}`);
  }
}

export default new CommandService();