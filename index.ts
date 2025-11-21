#!/usr/bin/env node
import { FastMCP } from 'fastmcp';
import { sendEmail } from './tools/add';

const server = new FastMCP({
  name: 'Resume Parser',
  version: '1.0.4',
});

server.addTool(sendEmail);

server.start({
  transportType: 'stdio',
});
