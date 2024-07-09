import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { teamService } from './team.service';

const getTeams: RequestHandler = catchAsync(async (req, res) => {
  const data = await teamService.getTeamDB();

  sendResponse(res, {
    success: data.length ? true : false,
    statusCode: data.length ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: data.length ? 'retrieved team successfully' : 'team not found',
    data,
  });
});

export const teamController = {
  getTeams,
};
