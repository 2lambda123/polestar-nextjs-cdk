import chalk from 'chalk';

class Logger {
  info(message: string) {
    console.log(chalk.dim(message));
  }

  warn(message: string) {
    console.log(chalk.yellow(message));
  }

  error(message: string, data?: any) {
    this.log('ERROR', message, data);
  }

  debug(message: string, data?: any) {
    this.log(chalk.blue('DEBUG'), message, data);
  }

  log(label: string, message: string, data?: any) {
    const now = new Date().toISOString();
    const body = JSON.stringify(data) || '';

    console.log(`${chalk.dim(now)} ${`[${label}]`}: ${message + body}`);
  }
}

export const logger = new Logger();
