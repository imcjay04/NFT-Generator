
// when we want things to look colourful we use Chalk Plugin
const moment = require("moment");
const chalk = require("chalk");
const path = require("path");
const { get } = require("http");
const regex = /(([^(]+):([0-9]+):[0-9]+)/i
class Logger {
  get now() {
    return moment().format("HH:mm a");
  }

  /**
   * @param {string} error
   */
  error(error) {
    return console.error(`${chalk.red("[ERROR]")}${chalk.blue(`[${this.now}]`)} ${error} ${error.stack}`);

  }

  /**
   * @param {string} type
   * @param {string} warning
   */
  warn(type, warning) {
    return console.warn(`${chalk.yellow("[WARNING]")}[${type.toUpperCase()}][${this.now}]: ${warning}`)}

  /**
   * @param {string} info
   */
  log(info) {
    return console.log(`${chalk.blue("[LOG]")}${chalk.blue(`[${this.now}]`)} ${info}`);
  }

    /**
   * @param {string} info
   */
  bot(info) {
    return console.log(`${chalk.blue("[BOT]")}${chalk.blue(`[${this.now}]`)} ${info}`);
  }


   /**
   * @param {string} info
   */
    cjay(info) {
      return console.log(`${chalk.yellow("[Creator]")}${chalk.yellow(`[${this.now}]`)} ${info}`);
    }

    /**
   * @param {string} message
   */
    database(message) {
      return console.log(`${chalk.yellow("[DATABASE]")}${chalk.yellow(`[${this.now}]`)} ${message}`);
    }
}

module.exports = new Logger();
