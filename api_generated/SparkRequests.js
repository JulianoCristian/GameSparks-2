function SparkRequests (type) {}

/** 
 * Accepts a challenge that has been issued to the current player.<p>
 * 
*/ 
SparkRequests._AcceptChallengeRequest = function(){};


/** 
 * Accepts a challenge that has been issued to the current player.<p>
 * 
*/ 
SparkRequests.prototype._AcceptChallengeRequest = function(){};


/** 
 * Retrieves the details of the current authenticated player.<p>
 * 
*/ 
SparkRequests._AccountDetailsRequest = function(){};


/** 
 * Retrieves the details of the current authenticated player.<p>
 * 
*/ 
SparkRequests.prototype._AccountDetailsRequest = function(){};


/** 
 * Processes the receipt from an Amazon in app purchase.<p>The GameSparks platform will validate the amazonUserId and receiptId with Amazon using the Amazon Purchase Secret configured against the game.<p>The receiptId in the data will be recorded and the request will be rejected if the receiptId has previously been processed, this prevents replay attacks.<p>Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the receipt with the 'Amazon Product Id' configured against the virtual good.<p>
 * 
*/ 
SparkRequests._AmazonBuyGoodsRequest = function(){};


/** 
 * Processes the receipt from an Amazon in app purchase.<p>The GameSparks platform will validate the amazonUserId and receiptId with Amazon using the Amazon Purchase Secret configured against the game.<p>The receiptId in the data will be recorded and the request will be rejected if the receiptId has previously been processed, this prevents replay attacks.<p>Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the receipt with the 'Amazon Product Id' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.prototype._AmazonBuyGoodsRequest = function(){};


/** 
 * Allows an Amazon access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Amazon platform and store them within GameSparks.<p>If the Amazon user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Amazon user is not already registered with the game, the Amazon user will be linked to the current player.<p>If the current player has not authenticated and the Amazon user is not known, a new player will be created using the Amazon details and the session will be authenticated against the new player.<p>If the Amazon user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._AmazonConnectRequest = function(){};


/** 
 * Allows an Amazon access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Amazon platform and store them within GameSparks.<p>If the Amazon user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Amazon user is not already registered with the game, the Amazon user will be linked to the current player.<p>If the current player has not authenticated and the Amazon user is not known, a new player will be created using the Amazon details and the session will be authenticated against the new player.<p>If the Amazon user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._AmazonConnectRequest = function(){};


/** 
 * Records some custom analytical data.<p>Simple analytics, where you just need to track the number of times something happened, just take a key parameter. We'll record the players id against the data to allow you to report on averages per user<p>Timed analytics allow you to send start and end timer requests, and with this data GameSparks can track the length of time something takes.<p>If an end request is sent without a matching start timer the request will fail silently and your analytics data might not contain what you expect.<p>If both start and end are supplied, the request will be treated as a start timer.<p>An additional data payload can be attached to the event for advanced reporting. This data can be a string, number or JSON object.<p>If a second start timer is created using a key that has already had a start timer created without an end, the previous one will be marked as abandoned.<p>
 * 
*/ 
SparkRequests._AnalyticsRequest = function(){};


/** 
 * Records some custom analytical data.<p>Simple analytics, where you just need to track the number of times something happened, just take a key parameter. We'll record the players id against the data to allow you to report on averages per user<p>Timed analytics allow you to send start and end timer requests, and with this data GameSparks can track the length of time something takes.<p>If an end request is sent without a matching start timer the request will fail silently and your analytics data might not contain what you expect.<p>If both start and end are supplied, the request will be treated as a start timer.<p>An additional data payload can be attached to the event for advanced reporting. This data can be a string, number or JSON object.<p>If a second start timer is created using a key that has already had a start timer created without an end, the previous one will be marked as abandoned.<p>
 * 
*/ 
SparkRequests.prototype._AnalyticsRequest = function(){};


/** 
 * Returns leaderboard data that is adjacent to the currently signed in player's position within the given leaderboard.<p>
 * 
*/ 
SparkRequests._AroundMeLeaderboardRequest = function(){};


/** 
 * Returns leaderboard data that is adjacent to the currently signed in player's position within the given leaderboard.<p>
 * 
*/ 
SparkRequests.prototype._AroundMeLeaderboardRequest = function(){};


/** 
 * Provides authentication using a username/password combination.<p>The username will have been previously created using a RegistrationRequest.<p>
 * 
*/ 
SparkRequests._AuthenticationRequest = function(){};


/** 
 * Provides authentication using a username/password combination.<p>The username will have been previously created using a RegistrationRequest.<p>
 * 
*/ 
SparkRequests.prototype._AuthenticationRequest = function(){};


/** 
 * Performs a request for multiple players.<p>
 * 
*/ 
SparkRequests._BatchAdminRequest = function(){};


/** 
 * Performs a request for multiple players.<p>
 * 
*/ 
SparkRequests.prototype._BatchAdminRequest = function(){};


/** 
 * Purchases a virtual good with an in game currency. Once purchased the virtual good will be added to the players account.<p>
 * 
*/ 
SparkRequests._BuyVirtualGoodsRequest = function(){};


/** 
 * Purchases a virtual good with an in game currency. Once purchased the virtual good will be added to the players account.<p>
 * 
*/ 
SparkRequests.prototype._BuyVirtualGoodsRequest = function(){};


/** 
 * Cancel one or more bulk jobs.<p>
 * 
*/ 
SparkRequests._CancelBulkJobAdminRequest = function(){};


/** 
 * Cancel one or more bulk jobs.<p>
 * 
*/ 
SparkRequests.prototype._CancelBulkJobAdminRequest = function(){};


/** 
 * Change the details of the currently signed in Player.<p>
 * 
*/ 
SparkRequests._ChangeUserDetailsRequest = function(){};


/** 
 * Change the details of the currently signed in Player.<p>
 * 
*/ 
SparkRequests.prototype._ChangeUserDetailsRequest = function(){};


/** 
 * Sends a message to all players involved in the challenge. The current player must be involved in the challenge for the message to be sent.<p>As the message is sent to all players, the current player will also see details of the message in the response. Read the section on response message aggregation for a description of this.<p>
 * 
*/ 
SparkRequests._ChatOnChallengeRequest = function(){};


/** 
 * Sends a message to all players involved in the challenge. The current player must be involved in the challenge for the message to be sent.<p>As the message is sent to all players, the current player will also see details of the message in the response. Read the section on response message aggregation for a description of this.<p>
 * 
*/ 
SparkRequests.prototype._ChatOnChallengeRequest = function(){};


/** 
 * Consumes a given amount of the specified virtual good.<p>
 * 
*/ 
SparkRequests._ConsumeVirtualGoodRequest = function(){};


/** 
 * Consumes a given amount of the specified virtual good.<p>
 * 
*/ 
SparkRequests.prototype._ConsumeVirtualGoodRequest = function(){};


/** 
 * Issues a challenge to a group of players from the currently signed in player.<p>The endTime field must be present unless the challenge template has an achievement set in the 'First to Achievement' field.<p>The usersToChallenge field must be present for this request if the acessType is PRIVATE (which is the default).<p>
 * 
*/ 
SparkRequests._CreateChallengeRequest = function(){};


/** 
 * Issues a challenge to a group of players from the currently signed in player.<p>The endTime field must be present unless the challenge template has an achievement set in the 'First to Achievement' field.<p>The usersToChallenge field must be present for this request if the acessType is PRIVATE (which is the default).<p>
 * 
*/ 
SparkRequests.prototype._CreateChallengeRequest = function(){};


/** 
 * Allows a new team to be created.<p>
 * 
*/ 
SparkRequests._CreateTeamRequest = function(){};


/** 
 * Allows a new team to be created.<p>
 * 
*/ 
SparkRequests.prototype._CreateTeamRequest = function(){};


/** 
 * Declines a challenge that has been issued to the current player.<p>
 * 
*/ 
SparkRequests._DeclineChallengeRequest = function(){};


/** 
 * Declines a challenge that has been issued to the current player.<p>
 * 
*/ 
SparkRequests.prototype._DeclineChallengeRequest = function(){};


/** 
 * Allows a device id to be used to create an anonymous profile in the game.<p>This allows the player to be tracked and have data stored against them before using FacebookConnectRequest to create a full profile.<p>DeviceAuthenticationRequest should not be used in conjunction with RegistrationRequest as the two accounts will not be merged.<p>
 * 
*/ 
SparkRequests._DeviceAuthenticationRequest = function(){};


/** 
 * Allows a device id to be used to create an anonymous profile in the game.<p>This allows the player to be tracked and have data stored against them before using FacebookConnectRequest to create a full profile.<p>DeviceAuthenticationRequest should not be used in conjunction with RegistrationRequest as the two accounts will not be merged.<p>
 * 
*/ 
SparkRequests.prototype._DeviceAuthenticationRequest = function(){};


/** 
 * Allows a message to be dismissed. Once dismissed the message will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.<p>
 * 
*/ 
SparkRequests._DismissMessageRequest = function(){};


/** 
 * Allows a message to be dismissed. Once dismissed the message will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.<p>
 * 
*/ 
SparkRequests.prototype._DismissMessageRequest = function(){};


/** 
 * Allows multiple messages to be dismissed. Once dismissed the messages will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.<p>
 * 
*/ 
SparkRequests._DismissMultipleMessagesRequest = function(){};


/** 
 * Allows multiple messages to be dismissed. Once dismissed the messages will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.<p>
 * 
*/ 
SparkRequests.prototype._DismissMultipleMessagesRequest = function(){};


/** 
 * Allows a player to drop a team.<p>
 * 
*/ 
SparkRequests._DropTeamRequest = function(){};


/** 
 * Allows a player to drop a team.<p>
 * 
*/ 
SparkRequests.prototype._DropTeamRequest = function(){};


/** 
 * Records the end of the current player's active session.<p>The SDK will automatically create a new session ID when the application is started, this method can be useful to call when the app goes into the background to allow reporting on player session length.<p>
 * 
*/ 
SparkRequests._EndSessionRequest = function(){};


/** 
 * Records the end of the current player's active session.<p>The SDK will automatically create a new session ID when the application is started, this method can be useful to call when the app goes into the background to allow reporting on player session length.<p>
 * 
*/ 
SparkRequests.prototype._EndSessionRequest = function(){};


/** 
 * Allows either a Facebook access token, or a Facebook authorization code to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Facebook platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Facebook user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the Facebook user is not already registered with the game, the Facebook user will be linked to the current player.<p>If the current player has not authenticated and the Facebook user is not known, a new player will be created using the Facebook details and the session will be authenticated against the new player.<p>If the Facebook user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._FacebookConnectRequest = function(){};


/** 
 * Allows either a Facebook access token, or a Facebook authorization code to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Facebook platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Facebook user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the Facebook user is not already registered with the game, the Facebook user will be linked to the current player.<p>If the current player has not authenticated and the Facebook user is not known, a new player will be created using the Facebook details and the session will be authenticated against the new player.<p>If the Facebook user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._FacebookConnectRequest = function(){};


/** 
 * Allows a player to find challenges that they are eligible to join.<p>
 * 
*/ 
SparkRequests._FindChallengeRequest = function(){};


/** 
 * Allows a player to find challenges that they are eligible to join.<p>
 * 
*/ 
SparkRequests.prototype._FindChallengeRequest = function(){};


/** 
 * Find other pending matches that will match this player's previously submitted MatchmakingRequest.<p>Used for manual matching of players, where you want control over which pending match should be chosen.<p>Each player must match the other for the pending match to be found.<p>
 * 
*/ 
SparkRequests._FindPendingMatchesRequest = function(){};


/** 
 * Find other pending matches that will match this player's previously submitted MatchmakingRequest.<p>Used for manual matching of players, where you want control over which pending match should be chosen.<p>Each player must match the other for the pending match to be found.<p>
 * 
*/ 
SparkRequests.prototype._FindPendingMatchesRequest = function(){};


/** 
 * Allows an Apple account that has GameCenter to be used as an authentication mechanism.<p>The request must supply the GameCenter user details, such as the player id and username.<p>If the GameCenter user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the GameCenter user is not already registered with the game, the GameCenter user will be linked to the current player.<p>If the current player has not authenticated and the GameCenter user is not known, a new player will be created using the GameCenter details and the session will be authenticated against the new player.<p>If the GameCenter user is already known, the session will switch to being the previously created user.<p>This API call requires the output details from GKLocalPlayer.generateIdentityVerificationSignatureWithCompletionHandler on your iOS device<p>
 * 
*/ 
SparkRequests._GameCenterConnectRequest = function(){};


/** 
 * Allows an Apple account that has GameCenter to be used as an authentication mechanism.<p>The request must supply the GameCenter user details, such as the player id and username.<p>If the GameCenter user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the GameCenter user is not already registered with the game, the GameCenter user will be linked to the current player.<p>If the current player has not authenticated and the GameCenter user is not known, a new player will be created using the GameCenter details and the session will be authenticated against the new player.<p>If the GameCenter user is already known, the session will switch to being the previously created user.<p>This API call requires the output details from GKLocalPlayer.generateIdentityVerificationSignatureWithCompletionHandler on your iOS device<p>
 * 
*/ 
SparkRequests.prototype._GameCenterConnectRequest = function(){};


/** 
 * Gets the details of a challenge. The current player must be involved in the challenge for the request to succeed.<p>
 * 
*/ 
SparkRequests._GetChallengeRequest = function(){};


/** 
 * Gets the details of a challenge. The current player must be involved in the challenge for the request to succeed.<p>
 * 
*/ 
SparkRequests.prototype._GetChallengeRequest = function(){};


/** 
 * Returns a secure, time sensitive url to allow the game to download a piece of downloadable content stored in the GameSparks platform.<p>
 * 
*/ 
SparkRequests._GetDownloadableRequest = function(){};


/** 
 * Returns a secure, time sensitive url to allow the game to download a piece of downloadable content stored in the GameSparks platform.<p>
 * 
*/ 
SparkRequests.prototype._GetDownloadableRequest = function(){};


/** 
 * Get the leaderboard entry data for the current player or a given player.<p>For each leaderboard it returns the hichest score the player has<p>
 * 
*/ 
SparkRequests._GetLeaderboardEntriesRequest = function(){};


/** 
 * Get the leaderboard entry data for the current player or a given player.<p>For each leaderboard it returns the hichest score the player has<p>
 * 
*/ 
SparkRequests.prototype._GetLeaderboardEntriesRequest = function(){};


/** 
 * Returns the full details of a message.<p>
 * 
*/ 
SparkRequests._GetMessageRequest = function(){};


/** 
 * Returns the full details of a message.<p>
 * 
*/ 
SparkRequests.prototype._GetMessageRequest = function(){};


/** 
 * Get the teams that the player is in. Can be filtered on team type and also on those teams that the player owns.<p>
 * 
*/ 
SparkRequests._GetMyTeamsRequest = function(){};


/** 
 * Get the teams that the player is in. Can be filtered on team type and also on those teams that the player owns.<p>
 * 
*/ 
SparkRequests.prototype._GetMyTeamsRequest = function(){};


/** 
 * Get the property for the given short Code.<p>
 * 
*/ 
SparkRequests._GetPropertyRequest = function(){};


/** 
 * Get the property for the given short Code.<p>
 * 
*/ 
SparkRequests.prototype._GetPropertyRequest = function(){};


/** 
 * Get the property set for the given short Code.<p>
 * 
*/ 
SparkRequests._GetPropertySetRequest = function(){};


/** 
 * Get the property set for the given short Code.<p>
 * 
*/ 
SparkRequests.prototype._GetPropertySetRequest = function(){};


/** 
 * Allows the details of a team to be retrieved.<p>
 * 
*/ 
SparkRequests._GetTeamRequest = function(){};


/** 
 * Allows the details of a team to be retrieved.<p>
 * 
*/ 
SparkRequests.prototype._GetTeamRequest = function(){};


/** 
 * Returns a secure, time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform.<p>
 * 
*/ 
SparkRequests._GetUploadUrlRequest = function(){};


/** 
 * Returns a secure, time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform.<p>
 * 
*/ 
SparkRequests.prototype._GetUploadUrlRequest = function(){};


/** 
 * Returns a secure, time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.<p>
 * 
*/ 
SparkRequests._GetUploadedRequest = function(){};


/** 
 * Returns a secure, time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.<p>
 * 
*/ 
SparkRequests.prototype._GetUploadedRequest = function(){};


/** 
 * Processes the response from a Google Play in app purchase flow.<p>The GameSparks platform will validate the signature and signed data with the Google Play Public Key configured against the game.<p>The orderId in the data will be recorded and the request will be rejected if the orderId has previously been processed, this prevents replay attacks.<p>Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the signed data with the 'Google Product ID' configured against the virtual good.<p>It is critical that the signedData is sent exactly as it is returned form google, including any whitespace. Any modification of the signedData will cause the verification process to fail.<p>
 * 
*/ 
SparkRequests._GooglePlayBuyGoodsRequest = function(){};


/** 
 * Processes the response from a Google Play in app purchase flow.<p>The GameSparks platform will validate the signature and signed data with the Google Play Public Key configured against the game.<p>The orderId in the data will be recorded and the request will be rejected if the orderId has previously been processed, this prevents replay attacks.<p>Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the signed data with the 'Google Product ID' configured against the virtual good.<p>It is critical that the signedData is sent exactly as it is returned form google, including any whitespace. Any modification of the signedData will cause the verification process to fail.<p>
 * 
*/ 
SparkRequests.prototype._GooglePlayBuyGoodsRequest = function(){};


/** 
 * Allows either a Google Play access code or an access token to be used as an authentication mechanism.<p>The access code needs to have at least the https://www.googleapis.com/auth/games scope.<p>For more details about Google OAuth 2.0 scopes refer to this: https://developers.google.com/identity/protocols/googlescopes#gamesConfigurationv1configuration<p>If the Google Play user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Google Play user is not already registered with the game, the Google Play user will be linked to the current player.<p>If the current player has not authenticated and the Google Play user is not known, a new player will be created using the Google Play details and the session will be authenticated against the new player.<p>If the Google Play user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._GooglePlayConnectRequest = function(){};


/** 
 * Allows either a Google Play access code or an access token to be used as an authentication mechanism.<p>The access code needs to have at least the https://www.googleapis.com/auth/games scope.<p>For more details about Google OAuth 2.0 scopes refer to this: https://developers.google.com/identity/protocols/googlescopes#gamesConfigurationv1configuration<p>If the Google Play user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Google Play user is not already registered with the game, the Google Play user will be linked to the current player.<p>If the current player has not authenticated and the Google Play user is not known, a new player will be created using the Google Play details and the session will be authenticated against the new player.<p>If the Google Play user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._GooglePlayConnectRequest = function(){};


/** 
 * Allows either a Google Plus access code or an authentication token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Google Plus platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Google Plus user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Google Plus user is not already registered with the game, the Google Plus user will be linked to the current player.<p>If the current player has not authenticated and the Google Plus user is not known, a new player will be created using the Google Plus details and the session will be authenticated against the new player.<p>If the Google Plus user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._GooglePlusConnectRequest = function(){};


/** 
 * Allows either a Google Plus access code or an authentication token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Google Plus platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Google Plus user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Google Plus user is not already registered with the game, the Google Plus user will be linked to the current player.<p>If the current player has not authenticated and the Google Plus user is not known, a new player will be created using the Google Plus details and the session will be authenticated against the new player.<p>If the Google Plus user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._GooglePlusConnectRequest = function(){};


/** 
 * Processes a transaction receipt from an App Store in app purchase.<p>The GameSparks platform will validate the receipt with Apple and process the response. The transaction_id in the response will be recorded and the request will be rejected if the transaction_id has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the product_id in the response with the 'IOS Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests._IOSBuyGoodsRequest = function(){};


/** 
 * Processes a transaction receipt from an App Store in app purchase.<p>The GameSparks platform will validate the receipt with Apple and process the response. The transaction_id in the response will be recorded and the request will be rejected if the transaction_id has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the product_id in the response with the 'IOS Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.prototype._IOSBuyGoodsRequest = function(){};


/** 
 * Allows a player to join an open challenge.<p>
 * 
*/ 
SparkRequests._JoinChallengeRequest = function(){};


/** 
 * Allows a player to join an open challenge.<p>
 * 
*/ 
SparkRequests.prototype._JoinChallengeRequest = function(){};


/** 
 * Requests to join a pending match (found via FindPendingMatchesRequest).<p>
 * 
*/ 
SparkRequests._JoinPendingMatchRequest = function(){};


/** 
 * Requests to join a pending match (found via FindPendingMatchesRequest).<p>
 * 
*/ 
SparkRequests.prototype._JoinPendingMatchRequest = function(){};


/** 
 * Allows a player to join a team or a team to be retrieved.<p>
 * 
*/ 
SparkRequests._JoinTeamRequest = function(){};


/** 
 * Allows a player to join a team or a team to be retrieved.<p>
 * 
*/ 
SparkRequests.prototype._JoinTeamRequest = function(){};


/** 
 * Allows a Kongregate account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Kongregate platform and store them within GameSparks.<p>If the Kongregate user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Kongregate user is not already registered with the game, the Kongregate user will be linked to the current player.<p>If the current player has not authenticated and the Kongregate user is not known, a new player will be created using the Kongregate details and the session will be authenticated against the new player.<p>If the Kongregate user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._KongregateConnectRequest = function(){};


/** 
 * Allows a Kongregate account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Kongregate platform and store them within GameSparks.<p>If the Kongregate user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Kongregate user is not already registered with the game, the Kongregate user will be linked to the current player.<p>If the current player has not authenticated and the Kongregate user is not known, a new player will be created using the Kongregate details and the session will be authenticated against the new player.<p>If the Kongregate user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._KongregateConnectRequest = function(){};


/** 
 * Returns the top data for either the specified global leaderboard or the specified challenges leaderboard. The data is sorted as defined in the rules specified in the leaderboard configuration.<p>The response contains the top of the leaderboard, and returns the number of entries as defined in the entryCount parameter.<p>If a shortCode is supplied, the response will contain the global leaderboard data. If a challengeInstanceId is supplied, the response will contain the leaderboard data for the challenge.<p>
 * 
*/ 
SparkRequests._LeaderboardDataRequest = function(){};


/** 
 * Returns the top data for either the specified global leaderboard or the specified challenges leaderboard. The data is sorted as defined in the rules specified in the leaderboard configuration.<p>The response contains the top of the leaderboard, and returns the number of entries as defined in the entryCount parameter.<p>If a shortCode is supplied, the response will contain the global leaderboard data. If a challengeInstanceId is supplied, the response will contain the leaderboard data for the challenge.<p>
 * 
*/ 
SparkRequests.prototype._LeaderboardDataRequest = function(){};


/** 
 * Get the leaderboard entry data for the current player or a given player.<p>For each leaderboard it returns the array of leaderboard entries that the player has.<p>
 * 
*/ 
SparkRequests._LeaderboardsEntriesRequest = function(){};


/** 
 * Get the leaderboard entry data for the current player or a given player.<p>For each leaderboard it returns the array of leaderboard entries that the player has.<p>
 * 
*/ 
SparkRequests.prototype._LeaderboardsEntriesRequest = function(){};


/** 
 * Allows a player to leave a team.<p>
 * 
*/ 
SparkRequests._LeaveTeamRequest = function(){};


/** 
 * Allows a player to leave a team.<p>
 * 
*/ 
SparkRequests.prototype._LeaveTeamRequest = function(){};


/** 
 * Retrieves a list of the configured achievements in the game, along with whether the current player has earned the achievement.<p>
 * 
*/ 
SparkRequests._ListAchievementsRequest = function(){};


/** 
 * Retrieves a list of the configured achievements in the game, along with whether the current player has earned the achievement.<p>
 * 
*/ 
SparkRequests.prototype._ListAchievementsRequest = function(){};


/** 
 * Lists existing bulk jobs.<p>
 * 
*/ 
SparkRequests._ListBulkJobsAdminRequest = function(){};


/** 
 * Lists existing bulk jobs.<p>
 * 
*/ 
SparkRequests.prototype._ListBulkJobsAdminRequest = function(){};


/** 
 * Returns a list of challenges in the state defined in the 'state' field.<p>The response can be further filtered by passing a shortCode field which will limit the returned lists to challenges of that short code.<p>Valid states are:<p>WAITING : The challenge has been issued and accepted and is waiting for the start date.<p>RUNNING : The challenge is active.<p>ISSUED : The challenge has been issued by the current player and is waiting to be accepted.<p>RECEIVED : The challenge has been issued to the current player and is waiting to be accepted.<p>COMPLETE : The challenge has completed.<p>DECLINED : The challenge has been issued by the current player and has been declined.<p>
 * 
*/ 
SparkRequests._ListChallengeRequest = function(){};


/** 
 * Returns a list of challenges in the state defined in the 'state' field.<p>The response can be further filtered by passing a shortCode field which will limit the returned lists to challenges of that short code.<p>Valid states are:<p>WAITING : The challenge has been issued and accepted and is waiting for the start date.<p>RUNNING : The challenge is active.<p>ISSUED : The challenge has been issued by the current player and is waiting to be accepted.<p>RECEIVED : The challenge has been issued to the current player and is waiting to be accepted.<p>COMPLETE : The challenge has completed.<p>DECLINED : The challenge has been issued by the current player and has been declined.<p>
 * 
*/ 
SparkRequests.prototype._ListChallengeRequest = function(){};


/** 
 * Returns the list of configured challenge types.<p>
 * 
*/ 
SparkRequests._ListChallengeTypeRequest = function(){};


/** 
 * Returns the list of configured challenge types.<p>
 * 
*/ 
SparkRequests.prototype._ListChallengeTypeRequest = function(){};


/** 
 * Returns the list of the current players game friends.<p>A Game friend is someone in their social network who also plays the game.<p>Against each friend, an indicator is supplied to show whether the friend is currently connected to the GameSparks service<p>
 * 
*/ 
SparkRequests._ListGameFriendsRequest = function(){};


/** 
 * Returns the list of the current players game friends.<p>A Game friend is someone in their social network who also plays the game.<p>Against each friend, an indicator is supplied to show whether the friend is currently connected to the GameSparks service<p>
 * 
*/ 
SparkRequests.prototype._ListGameFriendsRequest = function(){};


/** 
 * Returns the list of the current players friends in their social network, who are not yet playing this game.<p>This is dependent on the security and privacy policies of the social network.<p>For 
 * 
*/ 
SparkRequests._ListInviteFriendsRequest = function(){};


/** 
 * Returns the list of the current players friends in their social network, who are not yet playing this game.<p>This is dependent on the security and privacy policies of the social network.<p>For 
 * 
*/ 
SparkRequests.prototype._ListInviteFriendsRequest = function(){};


/** 
 * Returns a list of all leaderboards configured in the game.<p>
 * 
*/ 
SparkRequests._ListLeaderboardsRequest = function(){};


/** 
 * Returns a list of all leaderboards configured in the game.<p>
 * 
*/ 
SparkRequests.prototype._ListLeaderboardsRequest = function(){};


/** 
 * Returns the list of the current player's messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.<p>
 * 
*/ 
SparkRequests._ListMessageDetailRequest = function(){};


/** 
 * Returns the list of the current player's messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.<p>
 * 
*/ 
SparkRequests.prototype._ListMessageDetailRequest = function(){};


/** 
 * Returns the list of the current player's messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.<p>
 * 
*/ 
SparkRequests._ListMessageRequest = function(){};


/** 
 * Returns the list of the current player's messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.<p>
 * 
*/ 
SparkRequests.prototype._ListMessageRequest = function(){};


/** 
 * Returns a summary of the list of the current players messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest.<p>The full message can be retrieved using GetMessageRequest Read the section on Messages to see the complete list of messages and their meanings.<p>
 * 
*/ 
SparkRequests._ListMessageSummaryRequest = function(){};


/** 
 * Returns a summary of the list of the current players messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest.<p>The full message can be retrieved using GetMessageRequest Read the section on Messages to see the complete list of messages and their meanings.<p>
 * 
*/ 
SparkRequests.prototype._ListMessageSummaryRequest = function(){};


/** 
 * Get a list of the messages sent to the team (by players using SendTeamChatMessageRequest).<p>
 * 
*/ 
SparkRequests._ListTeamChatRequest = function(){};


/** 
 * Get a list of the messages sent to the team (by players using SendTeamChatMessageRequest).<p>
 * 
*/ 
SparkRequests.prototype._ListTeamChatRequest = function(){};


/** 
 * Returns a list of teams. Can be filtered on team name or team type.<p>
 * 
*/ 
SparkRequests._ListTeamsRequest = function(){};


/** 
 * Returns a list of teams. Can be filtered on team name or team type.<p>
 * 
*/ 
SparkRequests.prototype._ListTeamsRequest = function(){};


/** 
 * Returns a list of the current player's transaction history.<p>
 * 
*/ 
SparkRequests._ListTransactionsRequest = function(){};


/** 
 * Returns a list of the current player's transaction history.<p>
 * 
*/ 
SparkRequests.prototype._ListTransactionsRequest = function(){};


/** 
 * Returns the list of configured virtual goods.<p>
 * 
*/ 
SparkRequests._ListVirtualGoodsRequest = function(){};


/** 
 * Returns the list of configured virtual goods.<p>
 * 
*/ 
SparkRequests.prototype._ListVirtualGoodsRequest = function(){};


/** 
 * Allows a user defined event to be triggered. The event will be posted to the challenge specified.<p>This call differs from most as it does not have a fixed format. The @class, challengeInstanceId and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.<p>The 
 * 
*/ 
SparkRequests._LogChallengeEventRequest = function(){};


/** 
 * Allows a user defined event to be triggered. The event will be posted to the challenge specified.<p>This call differs from most as it does not have a fixed format. The @class, challengeInstanceId and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.<p>The 
 * 
*/ 
SparkRequests.prototype._LogChallengeEventRequest = function(){};


/** 
 * Allows a user defined event to be triggered.<p>This call differs from most as it does not have a fixed format. The @class and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.<p>The 
 * 
*/ 
SparkRequests._LogEventRequest = function(){};


/** 
 * Allows a user defined event to be triggered.<p>This call differs from most as it does not have a fixed format. The @class and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.<p>The 
 * 
*/ 
SparkRequests.prototype._LogEventRequest = function(){};


/** 
 * Find the details of an existing match this player belongs to, using the matchId<p>
 * 
*/ 
SparkRequests._MatchDetailsRequest = function(){};


/** 
 * Find the details of an existing match this player belongs to, using the matchId<p>
 * 
*/ 
SparkRequests.prototype._MatchDetailsRequest = function(){};


/** 
 * Register this player for matchmaking, using the given skill and matchShortCode.<p>Players looking for a match using the same matchShortCode will be considered for a match, based on the matchConfig.<p>Each player must match the other for the match to be found.<p>If the matchShortCode points to a match with realtime enabled, in order to minimise latency, the location of Players and their proximity to one another takes precedence over their reciprocal skill values.<p>
 * 
*/ 
SparkRequests._MatchmakingRequest = function(){};


/** 
 * Register this player for matchmaking, using the given skill and matchShortCode.<p>Players looking for a match using the same matchShortCode will be considered for a match, based on the matchConfig.<p>Each player must match the other for the match to be found.<p>If the matchShortCode points to a match with realtime enabled, in order to minimise latency, the location of Players and their proximity to one another takes precedence over their reciprocal skill values.<p>
 * 
*/ 
SparkRequests.prototype._MatchmakingRequest = function(){};


/** 
 * Allows an Nintendo Network Service Account (NSA) to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the NSA and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the NSA is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the NSA is not already registered with the game, the NSA will be linked to the current player.<p>If the current player has not authenticated and the NSA is not known, a new player will be created using the NSA details and the session will be authenticated against the new player.<p>If the NSA is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._NXConnectRequest = function(){};


/** 
 * Allows an Nintendo Network Service Account (NSA) to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the NSA and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the NSA is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the NSA is not already registered with the game, the NSA will be linked to the current player.<p>If the current player has not authenticated and the NSA is not known, a new player will be created using the NSA details and the session will be authenticated against the new player.<p>If the NSA is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._NXConnectRequest = function(){};


/** 
 * Allows a PSN account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the PSN platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the PSN user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the PSN user is not already registered with the game, the PSN user will be linked to the current player.<p>If the current player has not authenticated and the PSN user is not known, a new player will be created using the PSN details and the session will be authenticated against the new player.<p>If the PSN user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._PSNConnectRequest = function(){};


/** 
 * Allows a PSN account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the PSN platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the PSN user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the PSN user is not already registered with the game, the PSN user will be linked to the current player.<p>If the current player has not authenticated and the PSN user is not known, a new player will be created using the PSN details and the session will be authenticated against the new player.<p>If the PSN user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._PSNConnectRequest = function(){};


/** 
 * Processes an update of entitlement in PlayStation network.<p>The GameSparks platform will update the 'use_count' for an entitlement (by default 'use_count' is 1).<p>The request will be rejected if entitlement 'use_limit' is 0<p>GampSparks platform by default will use internally saved PSN user access token<p>
 * 
*/ 
SparkRequests._PsnBuyGoodsRequest = function(){};


/** 
 * Processes an update of entitlement in PlayStation network.<p>The GameSparks platform will update the 'use_count' for an entitlement (by default 'use_count' is 1).<p>The request will be rejected if entitlement 'use_limit' is 0<p>GampSparks platform by default will use internally saved PSN user access token<p>
 * 
*/ 
SparkRequests.prototype._PsnBuyGoodsRequest = function(){};


/** 
 * Registers the current device for push notifications. Currently GameSparks supports iOS, Android (GCM), FCM, Kindle, Viber & Microsoft Push notifications.<p>Supply the device type, and the push notification identifier for the device.<p>
 * 
*/ 
SparkRequests._PushRegistrationRequest = function(){};


/** 
 * Registers the current device for push notifications. Currently GameSparks supports iOS, Android (GCM), FCM, Kindle, Viber & Microsoft Push notifications.<p>Supply the device type, and the push notification identifier for the device.<p>
 * 
*/ 
SparkRequests.prototype._PushRegistrationRequest = function(){};


/** 
 * Allows a QQ access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the QQ platform and store them within GameSparks.<p>If the QQ user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the QQ user is not already registered with the game, the QQ user will be linked to the current player.<p>If the current player has not authenticated and the QQ user is not known, a new player will be created using the QQ details and the session will be authenticated against the new player.<p>If the QQ user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._QQConnectRequest = function(){};


/** 
 * Allows a QQ access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the QQ platform and store them within GameSparks.<p>If the QQ user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the QQ user is not already registered with the game, the QQ user will be linked to the current player.<p>If the current player has not authenticated and the QQ user is not known, a new player will be created using the QQ details and the session will be authenticated against the new player.<p>If the QQ user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._QQConnectRequest = function(){};


/** 
 * Allows a new player to be created using a username, password display name.<p>
 * 
*/ 
SparkRequests._RegistrationRequest = function(){};


/** 
 * Allows a new player to be created using a username, password display name.<p>
 * 
*/ 
SparkRequests.prototype._RegistrationRequest = function(){};


/** 
 * Revokes the purchase of a good. The items aquired will be removed from remaining items of the player.<p>
 * 
*/ 
SparkRequests._RevokePurchaseGoodsRequest = function(){};


/** 
 * Revokes the purchase of a good. The items aquired will be removed from remaining items of the player.<p>
 * 
*/ 
SparkRequests.prototype._RevokePurchaseGoodsRequest = function(){};


/** 
 * Schedules a bulk job to be run against multiple players.<p>
 * 
*/ 
SparkRequests._ScheduleBulkJobAdminRequest = function(){};


/** 
 * Schedules a bulk job to be run against multiple players.<p>
 * 
*/ 
SparkRequests.prototype._ScheduleBulkJobAdminRequest = function(){};


/** 
 * Sends a message to one or more game friend(s). A game friend is someone in the players social network who also plays the game.<p>
 * 
*/ 
SparkRequests._SendFriendMessageRequest = function(){};


/** 
 * Sends a message to one or more game friend(s). A game friend is someone in the players social network who also plays the game.<p>
 * 
*/ 
SparkRequests.prototype._SendFriendMessageRequest = function(){};


/** 
 * Send a message to all the players who are member of the given team<p>
 * 
*/ 
SparkRequests._SendTeamChatMessageRequest = function(){};


/** 
 * Send a message to all the players who are member of the given team<p>
 * 
*/ 
SparkRequests.prototype._SendTeamChatMessageRequest = function(){};


/** 
 * Allows a player's internal profile to be disconnected from an external system to which it is linked. Any friends linked as result of this connection will be removed.<p>
 * 
*/ 
SparkRequests._SocialDisconnectRequest = function(){};


/** 
 * Allows a player's internal profile to be disconnected from an external system to which it is linked. Any friends linked as result of this connection will be removed.<p>
 * 
*/ 
SparkRequests.prototype._SocialDisconnectRequest = function(){};


/** 
 * Returns leaderboard data that only contains entries of players that are game friends with the current player.<p>The GameSparks platform will attempt to return players both ahead and behind the current player, where data is available.<p>The entry count defines how many player should be returned both ahead and behind. The numer of results may vary if there are not enough friends either ahead or behind.<p>
 * 
*/ 
SparkRequests._SocialLeaderboardDataRequest = function(){};


/** 
 * Returns leaderboard data that only contains entries of players that are game friends with the current player.<p>The GameSparks platform will attempt to return players both ahead and behind the current player, where data is available.<p>The entry count defines how many player should be returned both ahead and behind. The numer of results may vary if there are not enough friends either ahead or behind.<p>
 * 
*/ 
SparkRequests.prototype._SocialLeaderboardDataRequest = function(){};


/** 
 * Returns detials of the current social connections of this player. Each connection .<p>
 * 
*/ 
SparkRequests._SocialStatusRequest = function(){};


/** 
 * Returns detials of the current social connections of this player. Each connection .<p>
 * 
*/ 
SparkRequests.prototype._SocialStatusRequest = function(){};


/** 
 * Processes a 'orderid' from a Steam.<p>The GameSparks platform will validate the 'orderid' with Steam and process the response. The 'orderid' from the response will be recorded and the request will be rejected, if the 'orderid' has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the 'itemid' in the response with the 'Steam Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests._SteamBuyGoodsRequest = function(){};


/** 
 * Processes a 'orderid' from a Steam.<p>The GameSparks platform will validate the 'orderid' with Steam and process the response. The 'orderid' from the response will be recorded and the request will be rejected, if the 'orderid' has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the 'itemid' in the response with the 'Steam Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.prototype._SteamBuyGoodsRequest = function(){};


/** 
 * Allows a Steam sessionTicket to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Steam platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Steam user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Steam user is not already registered with the game, the Steam user will be linked to the current player.<p>If the current player has not authenticated and the Steam user is not known, a new player will be created using the Steam details and the session will be authenticated against the new player.<p>If the Steam user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._SteamConnectRequest = function(){};


/** 
 * Allows a Steam sessionTicket to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Steam platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Steam user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Steam user is not already registered with the game, the Steam user will be linked to the current player.<p>If the current player has not authenticated and the Steam user is not known, a new player will be created using the Steam details and the session will be authenticated against the new player.<p>If the Steam user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._SteamConnectRequest = function(){};


/** 
 * Allows a Twitch account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Twitch platform and store them within GameSparks.<p>If the Twitch user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitch user is not already registered with the game, the Twitch user will be linked to the current player.<p>If the current player has not authenticated and the Twitch user is not known, a new player will be created using the Twitch details and the session will be authenticated against the new player.<p>If the Twitch user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._TwitchConnectRequest = function(){};


/** 
 * Allows a Twitch account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Twitch platform and store them within GameSparks.<p>If the Twitch user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitch user is not already registered with the game, the Twitch user will be linked to the current player.<p>If the current player has not authenticated and the Twitch user is not known, a new player will be created using the Twitch details and the session will be authenticated against the new player.<p>If the Twitch user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._TwitchConnectRequest = function(){};


/** 
 * Allows a Twitter account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Twitter platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Twitter user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitter user is not already registered with the game, the Twitter user will be linked to the current player.<p>If the current player has not authenticated and the Twitter user is not known, a new player will be created using the Twitter details and the session will be authenticated against the new player.<p>If the Twitter user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._TwitterConnectRequest = function(){};


/** 
 * Allows a Twitter account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Twitter platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Twitter user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitter user is not already registered with the game, the Twitter user will be linked to the current player.<p>If the current player has not authenticated and the Twitter user is not known, a new player will be created using the Twitter details and the session will be authenticated against the new player.<p>If the Twitter user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._TwitterConnectRequest = function(){};


/** 
 * Allows a message status to be updated.<p>
 * 
*/ 
SparkRequests._UpdateMessageRequest = function(){};


/** 
 * Allows a message status to be updated.<p>
 * 
*/ 
SparkRequests.prototype._UpdateMessageRequest = function(){};


/** 
 * Allows a Viber account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Viber platform and store them within GameSparks.<p>A successful authentication will also register the player to receive Viber push notifications.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Viber user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Viber user is not already registered with the game, the Viber user will be linked to the current player.<p>If the current player has not authenticated and the Viber user is not known, a new player will be created using the Viber details and the session will be authenticated against the new player.<p>If the Viber user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._ViberConnectRequest = function(){};


/** 
 * Allows a Viber account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Viber platform and store them within GameSparks.<p>A successful authentication will also register the player to receive Viber push notifications.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Viber user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Viber user is not already registered with the game, the Viber user will be linked to the current player.<p>If the current player has not authenticated and the Viber user is not known, a new player will be created using the Viber details and the session will be authenticated against the new player.<p>If the Viber user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._ViberConnectRequest = function(){};


/** 
 * Allows a WeChat access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the WeChat platform and store them within GameSparks.<p>If the WeChat user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the WeChat user is not already registered with the game, the WeChat user will be linked to the current player.<p>If the current player has not authenticated and the WeChat user is not known, a new player will be created using the WeChat details and the session will be authenticated against the new player.<p>If the WeChat user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._WeChatConnectRequest = function(){};


/** 
 * Allows a WeChat access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the WeChat platform and store them within GameSparks.<p>If the WeChat user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the WeChat user is not already registered with the game, the WeChat user will be linked to the current player.<p>If the current player has not authenticated and the WeChat user is not known, a new player will be created using the WeChat details and the session will be authenticated against the new player.<p>If the WeChat user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._WeChatConnectRequest = function(){};


/** 
 * Processes a transaction receipt from a windows store purchase.<p>The GameSparks platform will validate the receipt using the signature embedded in the xml. The Id in the xml will be recorded and the request will be rejected if the Id has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the xml with the 'WP8 Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests._WindowsBuyGoodsRequest = function(){};


/** 
 * Processes a transaction receipt from a windows store purchase.<p>The GameSparks platform will validate the receipt using the signature embedded in the xml. The Id in the xml will be recorded and the request will be rejected if the Id has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the xml with the 'WP8 Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.prototype._WindowsBuyGoodsRequest = function(){};


/** 
 * Withdraws a challenge previously issued by the current player.<p>This can only be done while the challenge is in the ISSUED state. Once it's been accepted the challenge can not be withdrawn.<p>
 * 
*/ 
SparkRequests._WithdrawChallengeRequest = function(){};


/** 
 * Withdraws a challenge previously issued by the current player.<p>This can only be done while the challenge is in the ISSUED state. Once it's been accepted the challenge can not be withdrawn.<p>
 * 
*/ 
SparkRequests.prototype._WithdrawChallengeRequest = function(){};


/** 
 * Allows an Xbox Live Shared Token String to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Xbox Live and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Xbox user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox user is not already registered with the game, the Xbox user will be linked to the current player.<p>If the current player has not authenticated and the Xbox user is not known, a new player will be created using the Xbox details and the session will be authenticated against the new player.<p>If the Xbox user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._XBOXLiveConnectRequest = function(){};


/** 
 * Allows an Xbox Live Shared Token String to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Xbox Live and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Xbox user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox user is not already registered with the game, the Xbox user will be linked to the current player.<p>If the current player has not authenticated and the Xbox user is not known, a new player will be created using the Xbox details and the session will be authenticated against the new player.<p>If the Xbox user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._XBOXLiveConnectRequest = function(){};


/** 
 * Allows an Xbox One XSTS token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from Xbox Live and store them within GameSparks.<p>If the Xbox One user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox One user is not already registered with the game, the Xbox One user will be linked to the current player.<p>If the current player has not authenticated and the Xbox One user is not known, a new player will be created using the Xbox Live details and the session will be authenticated against the new player.<p>If the Xbox One user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests._XboxOneConnectRequest = function(){};


/** 
 * Allows an Xbox One XSTS token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from Xbox Live and store them within GameSparks.<p>If the Xbox One user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox One user is not already registered with the game, the Xbox One user will be linked to the current player.<p>If the current player has not authenticated and the Xbox One user is not known, a new player will be created using the Xbox Live details and the session will be authenticated against the new player.<p>If the Xbox One user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype._XboxOneConnectRequest = function(){};


/** 
 * Accepts a challenge that has been issued to the current player.<p>
 * 
*/ 
SparkRequests.AcceptChallengeRequest = function(){};


/** 
 * Accepts a challenge that has been issued to the current player.<p>
 * 
*/ 
SparkRequests.prototype.AcceptChallengeRequest = function(){};


/** 
 * Retrieves the details of the current authenticated player.<p>
 * 
*/ 
SparkRequests.AccountDetailsRequest = function(){};


/** 
 * Retrieves the details of the current authenticated player.<p>
 * 
*/ 
SparkRequests.prototype.AccountDetailsRequest = function(){};


/** 
 * Processes the receipt from an Amazon in app purchase.<p>The GameSparks platform will validate the amazonUserId and receiptId with Amazon using the Amazon Purchase Secret configured against the game.<p>The receiptId in the data will be recorded and the request will be rejected if the receiptId has previously been processed, this prevents replay attacks.<p>Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the receipt with the 'Amazon Product Id' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.AmazonBuyGoodsRequest = function(){};


/** 
 * Processes the receipt from an Amazon in app purchase.<p>The GameSparks platform will validate the amazonUserId and receiptId with Amazon using the Amazon Purchase Secret configured against the game.<p>The receiptId in the data will be recorded and the request will be rejected if the receiptId has previously been processed, this prevents replay attacks.<p>Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the receipt with the 'Amazon Product Id' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.prototype.AmazonBuyGoodsRequest = function(){};


/** 
 * Allows an Amazon access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Amazon platform and store them within GameSparks.<p>If the Amazon user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Amazon user is not already registered with the game, the Amazon user will be linked to the current player.<p>If the current player has not authenticated and the Amazon user is not known, a new player will be created using the Amazon details and the session will be authenticated against the new player.<p>If the Amazon user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.AmazonConnectRequest = function(){};


/** 
 * Allows an Amazon access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Amazon platform and store them within GameSparks.<p>If the Amazon user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Amazon user is not already registered with the game, the Amazon user will be linked to the current player.<p>If the current player has not authenticated and the Amazon user is not known, a new player will be created using the Amazon details and the session will be authenticated against the new player.<p>If the Amazon user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.AmazonConnectRequest = function(){};


/** 
 * Records some custom analytical data.<p>Simple analytics, where you just need to track the number of times something happened, just take a key parameter. We'll record the players id against the data to allow you to report on averages per user<p>Timed analytics allow you to send start and end timer requests, and with this data GameSparks can track the length of time something takes.<p>If an end request is sent without a matching start timer the request will fail silently and your analytics data might not contain what you expect.<p>If both start and end are supplied, the request will be treated as a start timer.<p>An additional data payload can be attached to the event for advanced reporting. This data can be a string, number or JSON object.<p>If a second start timer is created using a key that has already had a start timer created without an end, the previous one will be marked as abandoned.<p>
 * 
*/ 
SparkRequests.AnalyticsRequest = function(){};


/** 
 * Records some custom analytical data.<p>Simple analytics, where you just need to track the number of times something happened, just take a key parameter. We'll record the players id against the data to allow you to report on averages per user<p>Timed analytics allow you to send start and end timer requests, and with this data GameSparks can track the length of time something takes.<p>If an end request is sent without a matching start timer the request will fail silently and your analytics data might not contain what you expect.<p>If both start and end are supplied, the request will be treated as a start timer.<p>An additional data payload can be attached to the event for advanced reporting. This data can be a string, number or JSON object.<p>If a second start timer is created using a key that has already had a start timer created without an end, the previous one will be marked as abandoned.<p>
 * 
*/ 
SparkRequests.prototype.AnalyticsRequest = function(){};


/** 
 * Returns leaderboard data that is adjacent to the currently signed in player's position within the given leaderboard.<p>
 * 
*/ 
SparkRequests.AroundMeLeaderboardRequest = function(){};


/** 
 * Returns leaderboard data that is adjacent to the currently signed in player's position within the given leaderboard.<p>
 * 
*/ 
SparkRequests.prototype.AroundMeLeaderboardRequest = function(){};


/** 
 * Provides authentication using a username/password combination.<p>The username will have been previously created using a RegistrationRequest.<p>
 * 
*/ 
SparkRequests.AuthenticationRequest = function(){};


/** 
 * Provides authentication using a username/password combination.<p>The username will have been previously created using a RegistrationRequest.<p>
 * 
*/ 
SparkRequests.prototype.AuthenticationRequest = function(){};


/** 
 * Performs a request for multiple players.<p>
 * 
*/ 
SparkRequests.BatchAdminRequest = function(){};


/** 
 * Performs a request for multiple players.<p>
 * 
*/ 
SparkRequests.prototype.BatchAdminRequest = function(){};


/** 
 * Purchases a virtual good with an in game currency. Once purchased the virtual good will be added to the players account.<p>
 * 
*/ 
SparkRequests.BuyVirtualGoodsRequest = function(){};


/** 
 * Purchases a virtual good with an in game currency. Once purchased the virtual good will be added to the players account.<p>
 * 
*/ 
SparkRequests.prototype.BuyVirtualGoodsRequest = function(){};


/** 
 * Cancel one or more bulk jobs.<p>
 * 
*/ 
SparkRequests.CancelBulkJobAdminRequest = function(){};


/** 
 * Cancel one or more bulk jobs.<p>
 * 
*/ 
SparkRequests.prototype.CancelBulkJobAdminRequest = function(){};


/** 
 * Change the details of the currently signed in Player.<p>
 * 
*/ 
SparkRequests.ChangeUserDetailsRequest = function(){};


/** 
 * Change the details of the currently signed in Player.<p>
 * 
*/ 
SparkRequests.prototype.ChangeUserDetailsRequest = function(){};


/** 
 * Sends a message to all players involved in the challenge. The current player must be involved in the challenge for the message to be sent.<p>As the message is sent to all players, the current player will also see details of the message in the response. Read the section on response message aggregation for a description of this.<p>
 * 
*/ 
SparkRequests.ChatOnChallengeRequest = function(){};


/** 
 * Sends a message to all players involved in the challenge. The current player must be involved in the challenge for the message to be sent.<p>As the message is sent to all players, the current player will also see details of the message in the response. Read the section on response message aggregation for a description of this.<p>
 * 
*/ 
SparkRequests.prototype.ChatOnChallengeRequest = function(){};


/** 
 * Consumes a given amount of the specified virtual good.<p>
 * 
*/ 
SparkRequests.ConsumeVirtualGoodRequest = function(){};


/** 
 * Consumes a given amount of the specified virtual good.<p>
 * 
*/ 
SparkRequests.prototype.ConsumeVirtualGoodRequest = function(){};


/** 
 * Issues a challenge to a group of players from the currently signed in player.<p>The endTime field must be present unless the challenge template has an achievement set in the 'First to Achievement' field.<p>The usersToChallenge field must be present for this request if the acessType is PRIVATE (which is the default).<p>
 * 
*/ 
SparkRequests.CreateChallengeRequest = function(){};


/** 
 * Issues a challenge to a group of players from the currently signed in player.<p>The endTime field must be present unless the challenge template has an achievement set in the 'First to Achievement' field.<p>The usersToChallenge field must be present for this request if the acessType is PRIVATE (which is the default).<p>
 * 
*/ 
SparkRequests.prototype.CreateChallengeRequest = function(){};


/** 
 * Allows a new team to be created.<p>
 * 
*/ 
SparkRequests.CreateTeamRequest = function(){};


/** 
 * Allows a new team to be created.<p>
 * 
*/ 
SparkRequests.prototype.CreateTeamRequest = function(){};


/** 
 * Declines a challenge that has been issued to the current player.<p>
 * 
*/ 
SparkRequests.DeclineChallengeRequest = function(){};


/** 
 * Declines a challenge that has been issued to the current player.<p>
 * 
*/ 
SparkRequests.prototype.DeclineChallengeRequest = function(){};


/** 
 * Allows a device id to be used to create an anonymous profile in the game.<p>This allows the player to be tracked and have data stored against them before using FacebookConnectRequest to create a full profile.<p>DeviceAuthenticationRequest should not be used in conjunction with RegistrationRequest as the two accounts will not be merged.<p>
 * 
*/ 
SparkRequests.DeviceAuthenticationRequest = function(){};


/** 
 * Allows a device id to be used to create an anonymous profile in the game.<p>This allows the player to be tracked and have data stored against them before using FacebookConnectRequest to create a full profile.<p>DeviceAuthenticationRequest should not be used in conjunction with RegistrationRequest as the two accounts will not be merged.<p>
 * 
*/ 
SparkRequests.prototype.DeviceAuthenticationRequest = function(){};


/** 
 * Allows a message to be dismissed. Once dismissed the message will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.<p>
 * 
*/ 
SparkRequests.DismissMessageRequest = function(){};


/** 
 * Allows a message to be dismissed. Once dismissed the message will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.<p>
 * 
*/ 
SparkRequests.prototype.DismissMessageRequest = function(){};


/** 
 * Allows multiple messages to be dismissed. Once dismissed the messages will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.<p>
 * 
*/ 
SparkRequests.DismissMultipleMessagesRequest = function(){};


/** 
 * Allows multiple messages to be dismissed. Once dismissed the messages will no longer appear in either ListMessageResponse or ListMessageSummaryResponse.<p>
 * 
*/ 
SparkRequests.prototype.DismissMultipleMessagesRequest = function(){};


/** 
 * Allows a player to drop a team.<p>
 * 
*/ 
SparkRequests.DropTeamRequest = function(){};


/** 
 * Allows a player to drop a team.<p>
 * 
*/ 
SparkRequests.prototype.DropTeamRequest = function(){};


/** 
 * Records the end of the current player's active session.<p>The SDK will automatically create a new session ID when the application is started, this method can be useful to call when the app goes into the background to allow reporting on player session length.<p>
 * 
*/ 
SparkRequests.EndSessionRequest = function(){};


/** 
 * Records the end of the current player's active session.<p>The SDK will automatically create a new session ID when the application is started, this method can be useful to call when the app goes into the background to allow reporting on player session length.<p>
 * 
*/ 
SparkRequests.prototype.EndSessionRequest = function(){};


/** 
 * Allows either a Facebook access token, or a Facebook authorization code to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Facebook platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Facebook user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the Facebook user is not already registered with the game, the Facebook user will be linked to the current player.<p>If the current player has not authenticated and the Facebook user is not known, a new player will be created using the Facebook details and the session will be authenticated against the new player.<p>If the Facebook user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.FacebookConnectRequest = function(){};


/** 
 * Allows either a Facebook access token, or a Facebook authorization code to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Facebook platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Facebook user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the Facebook user is not already registered with the game, the Facebook user will be linked to the current player.<p>If the current player has not authenticated and the Facebook user is not known, a new player will be created using the Facebook details and the session will be authenticated against the new player.<p>If the Facebook user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.FacebookConnectRequest = function(){};


/** 
 * Allows a player to find challenges that they are eligible to join.<p>
 * 
*/ 
SparkRequests.FindChallengeRequest = function(){};


/** 
 * Allows a player to find challenges that they are eligible to join.<p>
 * 
*/ 
SparkRequests.prototype.FindChallengeRequest = function(){};


/** 
 * Find other pending matches that will match this player's previously submitted MatchmakingRequest.<p>Used for manual matching of players, where you want control over which pending match should be chosen.<p>Each player must match the other for the pending match to be found.<p>
 * 
*/ 
SparkRequests.FindPendingMatchesRequest = function(){};


/** 
 * Find other pending matches that will match this player's previously submitted MatchmakingRequest.<p>Used for manual matching of players, where you want control over which pending match should be chosen.<p>Each player must match the other for the pending match to be found.<p>
 * 
*/ 
SparkRequests.prototype.FindPendingMatchesRequest = function(){};


/** 
 * Allows an Apple account that has GameCenter to be used as an authentication mechanism.<p>The request must supply the GameCenter user details, such as the player id and username.<p>If the GameCenter user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the GameCenter user is not already registered with the game, the GameCenter user will be linked to the current player.<p>If the current player has not authenticated and the GameCenter user is not known, a new player will be created using the GameCenter details and the session will be authenticated against the new player.<p>If the GameCenter user is already known, the session will switch to being the previously created user.<p>This API call requires the output details from GKLocalPlayer.generateIdentityVerificationSignatureWithCompletionHandler on your iOS device<p>
 * 
*/ 
SparkRequests.GameCenterConnectRequest = function(){};


/** 
 * Allows an Apple account that has GameCenter to be used as an authentication mechanism.<p>The request must supply the GameCenter user details, such as the player id and username.<p>If the GameCenter user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the GameCenter user is not already registered with the game, the GameCenter user will be linked to the current player.<p>If the current player has not authenticated and the GameCenter user is not known, a new player will be created using the GameCenter details and the session will be authenticated against the new player.<p>If the GameCenter user is already known, the session will switch to being the previously created user.<p>This API call requires the output details from GKLocalPlayer.generateIdentityVerificationSignatureWithCompletionHandler on your iOS device<p>
 * 
*/ 
SparkRequests.prototype.GameCenterConnectRequest = function(){};


/** 
 * Gets the details of a challenge. The current player must be involved in the challenge for the request to succeed.<p>
 * 
*/ 
SparkRequests.GetChallengeRequest = function(){};


/** 
 * Gets the details of a challenge. The current player must be involved in the challenge for the request to succeed.<p>
 * 
*/ 
SparkRequests.prototype.GetChallengeRequest = function(){};


/** 
 * Returns a secure, time sensitive url to allow the game to download a piece of downloadable content stored in the GameSparks platform.<p>
 * 
*/ 
SparkRequests.GetDownloadableRequest = function(){};


/** 
 * Returns a secure, time sensitive url to allow the game to download a piece of downloadable content stored in the GameSparks platform.<p>
 * 
*/ 
SparkRequests.prototype.GetDownloadableRequest = function(){};


/** 
 * Get the leaderboard entry data for the current player or a given player.<p>For each leaderboard it returns the hichest score the player has<p>
 * 
*/ 
SparkRequests.GetLeaderboardEntriesRequest = function(){};


/** 
 * Get the leaderboard entry data for the current player or a given player.<p>For each leaderboard it returns the hichest score the player has<p>
 * 
*/ 
SparkRequests.prototype.GetLeaderboardEntriesRequest = function(){};


/** 
 * Returns the full details of a message.<p>
 * 
*/ 
SparkRequests.GetMessageRequest = function(){};


/** 
 * Returns the full details of a message.<p>
 * 
*/ 
SparkRequests.prototype.GetMessageRequest = function(){};


/** 
 * Get the teams that the player is in. Can be filtered on team type and also on those teams that the player owns.<p>
 * 
*/ 
SparkRequests.GetMyTeamsRequest = function(){};


/** 
 * Get the teams that the player is in. Can be filtered on team type and also on those teams that the player owns.<p>
 * 
*/ 
SparkRequests.prototype.GetMyTeamsRequest = function(){};


/** 
 * Get the property for the given short Code.<p>
 * 
*/ 
SparkRequests.GetPropertyRequest = function(){};


/** 
 * Get the property for the given short Code.<p>
 * 
*/ 
SparkRequests.prototype.GetPropertyRequest = function(){};


/** 
 * Get the property set for the given short Code.<p>
 * 
*/ 
SparkRequests.GetPropertySetRequest = function(){};


/** 
 * Get the property set for the given short Code.<p>
 * 
*/ 
SparkRequests.prototype.GetPropertySetRequest = function(){};


/** 
 * Allows the details of a team to be retrieved.<p>
 * 
*/ 
SparkRequests.GetTeamRequest = function(){};


/** 
 * Allows the details of a team to be retrieved.<p>
 * 
*/ 
SparkRequests.prototype.GetTeamRequest = function(){};


/** 
 * Returns a secure, time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform.<p>
 * 
*/ 
SparkRequests.GetUploadUrlRequest = function(){};


/** 
 * Returns a secure, time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform.<p>
 * 
*/ 
SparkRequests.prototype.GetUploadUrlRequest = function(){};


/** 
 * Returns a secure, time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.<p>
 * 
*/ 
SparkRequests.GetUploadedRequest = function(){};


/** 
 * Returns a secure, time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.<p>
 * 
*/ 
SparkRequests.prototype.GetUploadedRequest = function(){};


/** 
 * Processes the response from a Google Play in app purchase flow.<p>The GameSparks platform will validate the signature and signed data with the Google Play Public Key configured against the game.<p>The orderId in the data will be recorded and the request will be rejected if the orderId has previously been processed, this prevents replay attacks.<p>Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the signed data with the 'Google Product ID' configured against the virtual good.<p>It is critical that the signedData is sent exactly as it is returned form google, including any whitespace. Any modification of the signedData will cause the verification process to fail.<p>
 * 
*/ 
SparkRequests.GooglePlayBuyGoodsRequest = function(){};


/** 
 * Processes the response from a Google Play in app purchase flow.<p>The GameSparks platform will validate the signature and signed data with the Google Play Public Key configured against the game.<p>The orderId in the data will be recorded and the request will be rejected if the orderId has previously been processed, this prevents replay attacks.<p>Once verfied, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the signed data with the 'Google Product ID' configured against the virtual good.<p>It is critical that the signedData is sent exactly as it is returned form google, including any whitespace. Any modification of the signedData will cause the verification process to fail.<p>
 * 
*/ 
SparkRequests.prototype.GooglePlayBuyGoodsRequest = function(){};


/** 
 * Allows either a Google Play access code or an access token to be used as an authentication mechanism.<p>The access code needs to have at least the https://www.googleapis.com/auth/games scope.<p>For more details about Google OAuth 2.0 scopes refer to this: https://developers.google.com/identity/protocols/googlescopes#gamesConfigurationv1configuration<p>If the Google Play user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Google Play user is not already registered with the game, the Google Play user will be linked to the current player.<p>If the current player has not authenticated and the Google Play user is not known, a new player will be created using the Google Play details and the session will be authenticated against the new player.<p>If the Google Play user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.GooglePlayConnectRequest = function(){};


/** 
 * Allows either a Google Play access code or an access token to be used as an authentication mechanism.<p>The access code needs to have at least the https://www.googleapis.com/auth/games scope.<p>For more details about Google OAuth 2.0 scopes refer to this: https://developers.google.com/identity/protocols/googlescopes#gamesConfigurationv1configuration<p>If the Google Play user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Google Play user is not already registered with the game, the Google Play user will be linked to the current player.<p>If the current player has not authenticated and the Google Play user is not known, a new player will be created using the Google Play details and the session will be authenticated against the new player.<p>If the Google Play user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.GooglePlayConnectRequest = function(){};


/** 
 * Allows either a Google Plus access code or an authentication token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Google Plus platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Google Plus user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Google Plus user is not already registered with the game, the Google Plus user will be linked to the current player.<p>If the current player has not authenticated and the Google Plus user is not known, a new player will be created using the Google Plus details and the session will be authenticated against the new player.<p>If the Google Plus user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.GooglePlusConnectRequest = function(){};


/** 
 * Allows either a Google Plus access code or an authentication token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Google Plus platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Google Plus user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Google Plus user is not already registered with the game, the Google Plus user will be linked to the current player.<p>If the current player has not authenticated and the Google Plus user is not known, a new player will be created using the Google Plus details and the session will be authenticated against the new player.<p>If the Google Plus user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.GooglePlusConnectRequest = function(){};


/** 
 * Processes a transaction receipt from an App Store in app purchase.<p>The GameSparks platform will validate the receipt with Apple and process the response. The transaction_id in the response will be recorded and the request will be rejected if the transaction_id has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the product_id in the response with the 'IOS Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.IOSBuyGoodsRequest = function(){};


/** 
 * Processes a transaction receipt from an App Store in app purchase.<p>The GameSparks platform will validate the receipt with Apple and process the response. The transaction_id in the response will be recorded and the request will be rejected if the transaction_id has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the product_id in the response with the 'IOS Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.prototype.IOSBuyGoodsRequest = function(){};


/** 
 * Allows a player to join an open challenge.<p>
 * 
*/ 
SparkRequests.JoinChallengeRequest = function(){};


/** 
 * Allows a player to join an open challenge.<p>
 * 
*/ 
SparkRequests.prototype.JoinChallengeRequest = function(){};


/** 
 * Requests to join a pending match (found via FindPendingMatchesRequest).<p>
 * 
*/ 
SparkRequests.JoinPendingMatchRequest = function(){};


/** 
 * Requests to join a pending match (found via FindPendingMatchesRequest).<p>
 * 
*/ 
SparkRequests.prototype.JoinPendingMatchRequest = function(){};


/** 
 * Allows a player to join a team or a team to be retrieved.<p>
 * 
*/ 
SparkRequests.JoinTeamRequest = function(){};


/** 
 * Allows a player to join a team or a team to be retrieved.<p>
 * 
*/ 
SparkRequests.prototype.JoinTeamRequest = function(){};


/** 
 * Allows a Kongregate account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Kongregate platform and store them within GameSparks.<p>If the Kongregate user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Kongregate user is not already registered with the game, the Kongregate user will be linked to the current player.<p>If the current player has not authenticated and the Kongregate user is not known, a new player will be created using the Kongregate details and the session will be authenticated against the new player.<p>If the Kongregate user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.KongregateConnectRequest = function(){};


/** 
 * Allows a Kongregate account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Kongregate platform and store them within GameSparks.<p>If the Kongregate user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Kongregate user is not already registered with the game, the Kongregate user will be linked to the current player.<p>If the current player has not authenticated and the Kongregate user is not known, a new player will be created using the Kongregate details and the session will be authenticated against the new player.<p>If the Kongregate user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.KongregateConnectRequest = function(){};


/** 
 * Returns the top data for either the specified global leaderboard or the specified challenges leaderboard. The data is sorted as defined in the rules specified in the leaderboard configuration.<p>The response contains the top of the leaderboard, and returns the number of entries as defined in the entryCount parameter.<p>If a shortCode is supplied, the response will contain the global leaderboard data. If a challengeInstanceId is supplied, the response will contain the leaderboard data for the challenge.<p>
 * 
*/ 
SparkRequests.LeaderboardDataRequest = function(){};


/** 
 * Returns the top data for either the specified global leaderboard or the specified challenges leaderboard. The data is sorted as defined in the rules specified in the leaderboard configuration.<p>The response contains the top of the leaderboard, and returns the number of entries as defined in the entryCount parameter.<p>If a shortCode is supplied, the response will contain the global leaderboard data. If a challengeInstanceId is supplied, the response will contain the leaderboard data for the challenge.<p>
 * 
*/ 
SparkRequests.prototype.LeaderboardDataRequest = function(){};


/** 
 * Get the leaderboard entry data for the current player or a given player.<p>For each leaderboard it returns the array of leaderboard entries that the player has.<p>
 * 
*/ 
SparkRequests.LeaderboardsEntriesRequest = function(){};


/** 
 * Get the leaderboard entry data for the current player or a given player.<p>For each leaderboard it returns the array of leaderboard entries that the player has.<p>
 * 
*/ 
SparkRequests.prototype.LeaderboardsEntriesRequest = function(){};


/** 
 * Allows a player to leave a team.<p>
 * 
*/ 
SparkRequests.LeaveTeamRequest = function(){};


/** 
 * Allows a player to leave a team.<p>
 * 
*/ 
SparkRequests.prototype.LeaveTeamRequest = function(){};


/** 
 * Retrieves a list of the configured achievements in the game, along with whether the current player has earned the achievement.<p>
 * 
*/ 
SparkRequests.ListAchievementsRequest = function(){};


/** 
 * Retrieves a list of the configured achievements in the game, along with whether the current player has earned the achievement.<p>
 * 
*/ 
SparkRequests.prototype.ListAchievementsRequest = function(){};


/** 
 * Lists existing bulk jobs.<p>
 * 
*/ 
SparkRequests.ListBulkJobsAdminRequest = function(){};


/** 
 * Lists existing bulk jobs.<p>
 * 
*/ 
SparkRequests.prototype.ListBulkJobsAdminRequest = function(){};


/** 
 * Returns a list of challenges in the state defined in the 'state' field.<p>The response can be further filtered by passing a shortCode field which will limit the returned lists to challenges of that short code.<p>Valid states are:<p>WAITING : The challenge has been issued and accepted and is waiting for the start date.<p>RUNNING : The challenge is active.<p>ISSUED : The challenge has been issued by the current player and is waiting to be accepted.<p>RECEIVED : The challenge has been issued to the current player and is waiting to be accepted.<p>COMPLETE : The challenge has completed.<p>DECLINED : The challenge has been issued by the current player and has been declined.<p>
 * 
*/ 
SparkRequests.ListChallengeRequest = function(){};


/** 
 * Returns a list of challenges in the state defined in the 'state' field.<p>The response can be further filtered by passing a shortCode field which will limit the returned lists to challenges of that short code.<p>Valid states are:<p>WAITING : The challenge has been issued and accepted and is waiting for the start date.<p>RUNNING : The challenge is active.<p>ISSUED : The challenge has been issued by the current player and is waiting to be accepted.<p>RECEIVED : The challenge has been issued to the current player and is waiting to be accepted.<p>COMPLETE : The challenge has completed.<p>DECLINED : The challenge has been issued by the current player and has been declined.<p>
 * 
*/ 
SparkRequests.prototype.ListChallengeRequest = function(){};


/** 
 * Returns the list of configured challenge types.<p>
 * 
*/ 
SparkRequests.ListChallengeTypeRequest = function(){};


/** 
 * Returns the list of configured challenge types.<p>
 * 
*/ 
SparkRequests.prototype.ListChallengeTypeRequest = function(){};


/** 
 * Returns the list of the current players game friends.<p>A Game friend is someone in their social network who also plays the game.<p>Against each friend, an indicator is supplied to show whether the friend is currently connected to the GameSparks service<p>
 * 
*/ 
SparkRequests.ListGameFriendsRequest = function(){};


/** 
 * Returns the list of the current players game friends.<p>A Game friend is someone in their social network who also plays the game.<p>Against each friend, an indicator is supplied to show whether the friend is currently connected to the GameSparks service<p>
 * 
*/ 
SparkRequests.prototype.ListGameFriendsRequest = function(){};


/** 
 * Returns the list of the current players friends in their social network, who are not yet playing this game.<p>This is dependent on the security and privacy policies of the social network.<p>For 
 * 
*/ 
SparkRequests.ListInviteFriendsRequest = function(){};


/** 
 * Returns the list of the current players friends in their social network, who are not yet playing this game.<p>This is dependent on the security and privacy policies of the social network.<p>For 
 * 
*/ 
SparkRequests.prototype.ListInviteFriendsRequest = function(){};


/** 
 * Returns a list of all leaderboards configured in the game.<p>
 * 
*/ 
SparkRequests.ListLeaderboardsRequest = function(){};


/** 
 * Returns a list of all leaderboards configured in the game.<p>
 * 
*/ 
SparkRequests.prototype.ListLeaderboardsRequest = function(){};


/** 
 * Returns the list of the current player's messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.<p>
 * 
*/ 
SparkRequests.ListMessageDetailRequest = function(){};


/** 
 * Returns the list of the current player's messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.<p>
 * 
*/ 
SparkRequests.prototype.ListMessageDetailRequest = function(){};


/** 
 * Returns the list of the current player's messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.<p>
 * 
*/ 
SparkRequests.ListMessageRequest = function(){};


/** 
 * Returns the list of the current player's messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest Read the section on Messages to see the complete list of messages and their meaning.<p>
 * 
*/ 
SparkRequests.prototype.ListMessageRequest = function(){};


/** 
 * Returns a summary of the list of the current players messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest.<p>The full message can be retrieved using GetMessageRequest Read the section on Messages to see the complete list of messages and their meanings.<p>
 * 
*/ 
SparkRequests.ListMessageSummaryRequest = function(){};


/** 
 * Returns a summary of the list of the current players messages / notifications.<p>The list only contains un-dismissed messages, to dismiss a message see DismissMessageRequest.<p>The full message can be retrieved using GetMessageRequest Read the section on Messages to see the complete list of messages and their meanings.<p>
 * 
*/ 
SparkRequests.prototype.ListMessageSummaryRequest = function(){};


/** 
 * Get a list of the messages sent to the team (by players using SendTeamChatMessageRequest).<p>
 * 
*/ 
SparkRequests.ListTeamChatRequest = function(){};


/** 
 * Get a list of the messages sent to the team (by players using SendTeamChatMessageRequest).<p>
 * 
*/ 
SparkRequests.prototype.ListTeamChatRequest = function(){};


/** 
 * Returns a list of teams. Can be filtered on team name or team type.<p>
 * 
*/ 
SparkRequests.ListTeamsRequest = function(){};


/** 
 * Returns a list of teams. Can be filtered on team name or team type.<p>
 * 
*/ 
SparkRequests.prototype.ListTeamsRequest = function(){};


/** 
 * Returns a list of the current player's transaction history.<p>
 * 
*/ 
SparkRequests.ListTransactionsRequest = function(){};


/** 
 * Returns a list of the current player's transaction history.<p>
 * 
*/ 
SparkRequests.prototype.ListTransactionsRequest = function(){};


/** 
 * Returns the list of configured virtual goods.<p>
 * 
*/ 
SparkRequests.ListVirtualGoodsRequest = function(){};


/** 
 * Returns the list of configured virtual goods.<p>
 * 
*/ 
SparkRequests.prototype.ListVirtualGoodsRequest = function(){};


/** 
 * Allows a user defined event to be triggered. The event will be posted to the challenge specified.<p>This call differs from most as it does not have a fixed format. The @class, challengeInstanceId and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.<p>The 
 * 
*/ 
SparkRequests.LogChallengeEventRequest = function(){};


/** 
 * Allows a user defined event to be triggered. The event will be posted to the challenge specified.<p>This call differs from most as it does not have a fixed format. The @class, challengeInstanceId and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.<p>The 
 * 
*/ 
SparkRequests.prototype.LogChallengeEventRequest = function(){};


/** 
 * Allows a user defined event to be triggered.<p>This call differs from most as it does not have a fixed format. The @class and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.<p>The 
 * 
*/ 
SparkRequests.LogEventRequest = function(){};


/** 
 * Allows a user defined event to be triggered.<p>This call differs from most as it does not have a fixed format. The @class and eventKey attributes are common, but the rest of the attributes are as defined in the Event object configured in the dev portal.<p>The 
 * 
*/ 
SparkRequests.prototype.LogEventRequest = function(){};


/** 
 * Find the details of an existing match this player belongs to, using the matchId<p>
 * 
*/ 
SparkRequests.MatchDetailsRequest = function(){};


/** 
 * Find the details of an existing match this player belongs to, using the matchId<p>
 * 
*/ 
SparkRequests.prototype.MatchDetailsRequest = function(){};


/** 
 * Register this player for matchmaking, using the given skill and matchShortCode.<p>Players looking for a match using the same matchShortCode will be considered for a match, based on the matchConfig.<p>Each player must match the other for the match to be found.<p>If the matchShortCode points to a match with realtime enabled, in order to minimise latency, the location of Players and their proximity to one another takes precedence over their reciprocal skill values.<p>
 * 
*/ 
SparkRequests.MatchmakingRequest = function(){};


/** 
 * Register this player for matchmaking, using the given skill and matchShortCode.<p>Players looking for a match using the same matchShortCode will be considered for a match, based on the matchConfig.<p>Each player must match the other for the match to be found.<p>If the matchShortCode points to a match with realtime enabled, in order to minimise latency, the location of Players and their proximity to one another takes precedence over their reciprocal skill values.<p>
 * 
*/ 
SparkRequests.prototype.MatchmakingRequest = function(){};


/** 
 * Allows an Nintendo Network Service Account (NSA) to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the NSA and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the NSA is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the NSA is not already registered with the game, the NSA will be linked to the current player.<p>If the current player has not authenticated and the NSA is not known, a new player will be created using the NSA details and the session will be authenticated against the new player.<p>If the NSA is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.NXConnectRequest = function(){};


/** 
 * Allows an Nintendo Network Service Account (NSA) to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the NSA and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the NSA is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the NSA is not already registered with the game, the NSA will be linked to the current player.<p>If the current player has not authenticated and the NSA is not known, a new player will be created using the NSA details and the session will be authenticated against the new player.<p>If the NSA is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.NXConnectRequest = function(){};


/** 
 * Allows a PSN account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the PSN platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the PSN user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the PSN user is not already registered with the game, the PSN user will be linked to the current player.<p>If the current player has not authenticated and the PSN user is not known, a new player will be created using the PSN details and the session will be authenticated against the new player.<p>If the PSN user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.PSNConnectRequest = function(){};


/** 
 * Allows a PSN account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the PSN platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the PSN user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the PSN user is not already registered with the game, the PSN user will be linked to the current player.<p>If the current player has not authenticated and the PSN user is not known, a new player will be created using the PSN details and the session will be authenticated against the new player.<p>If the PSN user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.PSNConnectRequest = function(){};


/** 
 * Processes an update of entitlement in PlayStation network.<p>The GameSparks platform will update the 'use_count' for an entitlement (by default 'use_count' is 1).<p>The request will be rejected if entitlement 'use_limit' is 0<p>GampSparks platform by default will use internally saved PSN user access token<p>
 * 
*/ 
SparkRequests.PsnBuyGoodsRequest = function(){};


/** 
 * Processes an update of entitlement in PlayStation network.<p>The GameSparks platform will update the 'use_count' for an entitlement (by default 'use_count' is 1).<p>The request will be rejected if entitlement 'use_limit' is 0<p>GampSparks platform by default will use internally saved PSN user access token<p>
 * 
*/ 
SparkRequests.prototype.PsnBuyGoodsRequest = function(){};


/** 
 * Registers the current device for push notifications. Currently GameSparks supports iOS, Android (GCM), FCM, Kindle, Viber & Microsoft Push notifications.<p>Supply the device type, and the push notification identifier for the device.<p>
 * 
*/ 
SparkRequests.PushRegistrationRequest = function(){};


/** 
 * Registers the current device for push notifications. Currently GameSparks supports iOS, Android (GCM), FCM, Kindle, Viber & Microsoft Push notifications.<p>Supply the device type, and the push notification identifier for the device.<p>
 * 
*/ 
SparkRequests.prototype.PushRegistrationRequest = function(){};


/** 
 * Allows a QQ access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the QQ platform and store them within GameSparks.<p>If the QQ user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the QQ user is not already registered with the game, the QQ user will be linked to the current player.<p>If the current player has not authenticated and the QQ user is not known, a new player will be created using the QQ details and the session will be authenticated against the new player.<p>If the QQ user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.QQConnectRequest = function(){};


/** 
 * Allows a QQ access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the QQ platform and store them within GameSparks.<p>If the QQ user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the QQ user is not already registered with the game, the QQ user will be linked to the current player.<p>If the current player has not authenticated and the QQ user is not known, a new player will be created using the QQ details and the session will be authenticated against the new player.<p>If the QQ user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.QQConnectRequest = function(){};


/** 
 * Allows a new player to be created using a username, password display name.<p>
 * 
*/ 
SparkRequests.RegistrationRequest = function(){};


/** 
 * Allows a new player to be created using a username, password display name.<p>
 * 
*/ 
SparkRequests.prototype.RegistrationRequest = function(){};


/** 
 * Revokes the purchase of a good. The items aquired will be removed from remaining items of the player.<p>
 * 
*/ 
SparkRequests.RevokePurchaseGoodsRequest = function(){};


/** 
 * Revokes the purchase of a good. The items aquired will be removed from remaining items of the player.<p>
 * 
*/ 
SparkRequests.prototype.RevokePurchaseGoodsRequest = function(){};


/** 
 * Schedules a bulk job to be run against multiple players.<p>
 * 
*/ 
SparkRequests.ScheduleBulkJobAdminRequest = function(){};


/** 
 * Schedules a bulk job to be run against multiple players.<p>
 * 
*/ 
SparkRequests.prototype.ScheduleBulkJobAdminRequest = function(){};


/** 
 * Sends a message to one or more game friend(s). A game friend is someone in the players social network who also plays the game.<p>
 * 
*/ 
SparkRequests.SendFriendMessageRequest = function(){};


/** 
 * Sends a message to one or more game friend(s). A game friend is someone in the players social network who also plays the game.<p>
 * 
*/ 
SparkRequests.prototype.SendFriendMessageRequest = function(){};


/** 
 * Send a message to all the players who are member of the given team<p>
 * 
*/ 
SparkRequests.SendTeamChatMessageRequest = function(){};


/** 
 * Send a message to all the players who are member of the given team<p>
 * 
*/ 
SparkRequests.prototype.SendTeamChatMessageRequest = function(){};


/** 
 * Allows a player's internal profile to be disconnected from an external system to which it is linked. Any friends linked as result of this connection will be removed.<p>
 * 
*/ 
SparkRequests.SocialDisconnectRequest = function(){};


/** 
 * Allows a player's internal profile to be disconnected from an external system to which it is linked. Any friends linked as result of this connection will be removed.<p>
 * 
*/ 
SparkRequests.prototype.SocialDisconnectRequest = function(){};


/** 
 * Returns leaderboard data that only contains entries of players that are game friends with the current player.<p>The GameSparks platform will attempt to return players both ahead and behind the current player, where data is available.<p>The entry count defines how many player should be returned both ahead and behind. The numer of results may vary if there are not enough friends either ahead or behind.<p>
 * 
*/ 
SparkRequests.SocialLeaderboardDataRequest = function(){};


/** 
 * Returns leaderboard data that only contains entries of players that are game friends with the current player.<p>The GameSparks platform will attempt to return players both ahead and behind the current player, where data is available.<p>The entry count defines how many player should be returned both ahead and behind. The numer of results may vary if there are not enough friends either ahead or behind.<p>
 * 
*/ 
SparkRequests.prototype.SocialLeaderboardDataRequest = function(){};


/** 
 * Returns detials of the current social connections of this player. Each connection .<p>
 * 
*/ 
SparkRequests.SocialStatusRequest = function(){};


/** 
 * Returns detials of the current social connections of this player. Each connection .<p>
 * 
*/ 
SparkRequests.prototype.SocialStatusRequest = function(){};


/** 
 * Processes a 'orderid' from a Steam.<p>The GameSparks platform will validate the 'orderid' with Steam and process the response. The 'orderid' from the response will be recorded and the request will be rejected, if the 'orderid' has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the 'itemid' in the response with the 'Steam Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.SteamBuyGoodsRequest = function(){};


/** 
 * Processes a 'orderid' from a Steam.<p>The GameSparks platform will validate the 'orderid' with Steam and process the response. The 'orderid' from the response will be recorded and the request will be rejected, if the 'orderid' has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the 'itemid' in the response with the 'Steam Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.prototype.SteamBuyGoodsRequest = function(){};


/** 
 * Allows a Steam sessionTicket to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Steam platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Steam user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Steam user is not already registered with the game, the Steam user will be linked to the current player.<p>If the current player has not authenticated and the Steam user is not known, a new player will be created using the Steam details and the session will be authenticated against the new player.<p>If the Steam user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.SteamConnectRequest = function(){};


/** 
 * Allows a Steam sessionTicket to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Steam platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Steam user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Steam user is not already registered with the game, the Steam user will be linked to the current player.<p>If the current player has not authenticated and the Steam user is not known, a new player will be created using the Steam details and the session will be authenticated against the new player.<p>If the Steam user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.SteamConnectRequest = function(){};


/** 
 * Allows a Twitch account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Twitch platform and store them within GameSparks.<p>If the Twitch user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitch user is not already registered with the game, the Twitch user will be linked to the current player.<p>If the current player has not authenticated and the Twitch user is not known, a new player will be created using the Twitch details and the session will be authenticated against the new player.<p>If the Twitch user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.TwitchConnectRequest = function(){};


/** 
 * Allows a Twitch account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Twitch platform and store them within GameSparks.<p>If the Twitch user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitch user is not already registered with the game, the Twitch user will be linked to the current player.<p>If the current player has not authenticated and the Twitch user is not known, a new player will be created using the Twitch details and the session will be authenticated against the new player.<p>If the Twitch user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.TwitchConnectRequest = function(){};


/** 
 * Allows a Twitter account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Twitter platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Twitter user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitter user is not already registered with the game, the Twitter user will be linked to the current player.<p>If the current player has not authenticated and the Twitter user is not known, a new player will be created using the Twitter details and the session will be authenticated against the new player.<p>If the Twitter user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.TwitterConnectRequest = function(){};


/** 
 * Allows a Twitter account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Twitter platform and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Twitter user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Twitter user is not already registered with the game, the Twitter user will be linked to the current player.<p>If the current player has not authenticated and the Twitter user is not known, a new player will be created using the Twitter details and the session will be authenticated against the new player.<p>If the Twitter user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.TwitterConnectRequest = function(){};


/** 
 * Allows a message status to be updated.<p>
 * 
*/ 
SparkRequests.UpdateMessageRequest = function(){};


/** 
 * Allows a message status to be updated.<p>
 * 
*/ 
SparkRequests.prototype.UpdateMessageRequest = function(){};


/** 
 * Allows a Viber account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Viber platform and store them within GameSparks.<p>A successful authentication will also register the player to receive Viber push notifications.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Viber user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Viber user is not already registered with the game, the Viber user will be linked to the current player.<p>If the current player has not authenticated and the Viber user is not known, a new player will be created using the Viber details and the session will be authenticated against the new player.<p>If the Viber user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.ViberConnectRequest = function(){};


/** 
 * Allows a Viber account to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Viber platform and store them within GameSparks.<p>A successful authentication will also register the player to receive Viber push notifications.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Viber user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Viber user is not already registered with the game, the Viber user will be linked to the current player.<p>If the current player has not authenticated and the Viber user is not known, a new player will be created using the Viber details and the session will be authenticated against the new player.<p>If the Viber user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.ViberConnectRequest = function(){};


/** 
 * Allows a WeChat access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the WeChat platform and store them within GameSparks.<p>If the WeChat user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the WeChat user is not already registered with the game, the WeChat user will be linked to the current player.<p>If the current player has not authenticated and the WeChat user is not known, a new player will be created using the WeChat details and the session will be authenticated against the new player.<p>If the WeChat user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.WeChatConnectRequest = function(){};


/** 
 * Allows a WeChat access token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the WeChat platform and store them within GameSparks.<p>If the WeChat user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthenticationRequest or RegistrationRequest AND the WeChat user is not already registered with the game, the WeChat user will be linked to the current player.<p>If the current player has not authenticated and the WeChat user is not known, a new player will be created using the WeChat details and the session will be authenticated against the new player.<p>If the WeChat user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.WeChatConnectRequest = function(){};


/** 
 * Processes a transaction receipt from a windows store purchase.<p>The GameSparks platform will validate the receipt using the signature embedded in the xml. The Id in the xml will be recorded and the request will be rejected if the Id has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the xml with the 'WP8 Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.WindowsBuyGoodsRequest = function(){};


/** 
 * Processes a transaction receipt from a windows store purchase.<p>The GameSparks platform will validate the receipt using the signature embedded in the xml. The Id in the xml will be recorded and the request will be rejected if the Id has previously been processed, this prevents replay attacks.<p>Once verified, the players account will be credited with the Virtual Good, or Virtual Currency the purchase contains. The virtual good will be looked up by matching the productId in the xml with the 'WP8 Product ID' configured against the virtual good.<p>
 * 
*/ 
SparkRequests.prototype.WindowsBuyGoodsRequest = function(){};


/** 
 * Withdraws a challenge previously issued by the current player.<p>This can only be done while the challenge is in the ISSUED state. Once it's been accepted the challenge can not be withdrawn.<p>
 * 
*/ 
SparkRequests.WithdrawChallengeRequest = function(){};


/** 
 * Withdraws a challenge previously issued by the current player.<p>This can only be done while the challenge is in the ISSUED state. Once it's been accepted the challenge can not be withdrawn.<p>
 * 
*/ 
SparkRequests.prototype.WithdrawChallengeRequest = function(){};


/** 
 * Allows an Xbox Live Shared Token String to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Xbox Live and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Xbox user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox user is not already registered with the game, the Xbox user will be linked to the current player.<p>If the current player has not authenticated and the Xbox user is not known, a new player will be created using the Xbox details and the session will be authenticated against the new player.<p>If the Xbox user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.XBOXLiveConnectRequest = function(){};


/** 
 * Allows an Xbox Live Shared Token String to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from the Xbox Live and store them within GameSparks.<p>GameSparks will determine the player's friends and whether any of them are currently registered with the game.<p>If the Xbox user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox user is not already registered with the game, the Xbox user will be linked to the current player.<p>If the current player has not authenticated and the Xbox user is not known, a new player will be created using the Xbox details and the session will be authenticated against the new player.<p>If the Xbox user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.XBOXLiveConnectRequest = function(){};


/** 
 * Allows an Xbox One XSTS token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from Xbox Live and store them within GameSparks.<p>If the Xbox One user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox One user is not already registered with the game, the Xbox One user will be linked to the current player.<p>If the current player has not authenticated and the Xbox One user is not known, a new player will be created using the Xbox Live details and the session will be authenticated against the new player.<p>If the Xbox One user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.XboxOneConnectRequest = function(){};


/** 
 * Allows an Xbox One XSTS token to be used as an authentication mechanism.<p>Once authenticated the platform can determine the current players details from Xbox Live and store them within GameSparks.<p>If the Xbox One user is already linked to a player, the current session will switch to the linked player.<p>If the current player has previously created an account using either DeviceAuthentictionRequest or RegistrationRequest AND the Xbox One user is not already registered with the game, the Xbox One user will be linked to the current player.<p>If the current player has not authenticated and the Xbox One user is not known, a new player will be created using the Xbox Live details and the session will be authenticated against the new player.<p>If the Xbox One user is already known, the session will switch to being the previously created user.<p>
 * 
*/ 
SparkRequests.prototype.XboxOneConnectRequest = function(){};


/** 
 * A nested object that represents the bulk job.<p>
 * 
*/ 
SparkRequests._BulkJob = function(){};


/** 
 * A nested object that represents the bulk job.<p>
 * 
*/ 
SparkRequests.prototype._BulkJob = function(){};


/** 
 * A nested object that represents the invitable friend.<p>
 * 
*/ 
SparkRequests._InvitableFriend = function(){};


/** 
 * A nested object that represents the invitable friend.<p>
 * 
*/ 
SparkRequests.prototype._InvitableFriend = function(){};


/** 
 * A nested object that represents the achievement data.<p>
 * 
*/ 
SparkRequests._Achievement = function(){};


/** 
 * A nested object that represents the achievement data.<p>
 * 
*/ 
SparkRequests.prototype._Achievement = function(){};


/** 
 * A collection of arbitrary data that can be added to a message via a Cloud Code script.<p>
 * 
*/ 
SparkRequests._BundledGood = function(){};


/** 
 * A collection of arbitrary data that can be added to a message via a Cloud Code script.<p>
 * 
*/ 
SparkRequests.prototype._BundledGood = function(){};


/** 
 * A nested object that represents the virtual good.<p>
 * 
*/ 
SparkRequests._VirtualGood = function(){};


/** 
 * A nested object that represents the virtual good.<p>
 * 
*/ 
SparkRequests.prototype._VirtualGood = function(){};


/** 
 * A nested object that represents a player.<p>
 * 
*/ 
SparkRequests._Player = function(){};


/** 
 * A nested object that represents a player.<p>
 * 
*/ 
SparkRequests.prototype._Player = function(){};


/** 
 * A nested object that represents the team.<p>
 * 
*/ 
SparkRequests._Team = function(){};


/** 
 * A nested object that represents the team.<p>
 * 
*/ 
SparkRequests.prototype._Team = function(){};


/** 
 * A nested object that represents the leaderboard configuration data.<p>
 * 
*/ 
SparkRequests._Leaderboard = function(){};


/** 
 * A nested object that represents the leaderboard configuration data.<p>
 * 
*/ 
SparkRequests.prototype._Leaderboard = function(){};


/** 
 * A message from a group chat<p>
 * 
*/ 
SparkRequests._ChatMessage = function(){};


/** 
 * A message from a group chat<p>
 * 
*/ 
SparkRequests.prototype._ChatMessage = function(){};


/** 
 * An object representing a player's id and name<p>
 * 
*/ 
SparkRequests._PlayerDetail = function(){};


/** 
 * An object representing a player's id and name<p>
 * 
*/ 
SparkRequests.prototype._PlayerDetail = function(){};


/** 
 * This object represents the result of uploading a file to the GameSparks platform.<p>
 * 
*/ 
SparkRequests._UploadData = function(){};


/** 
 * This object represents the result of uploading a file to the GameSparks platform.<p>
 * 
*/ 
SparkRequests.prototype._UploadData = function(){};


/** 
 * A collection of arbitrary data that can be added to a message via a Cloud Code script.<p>
 * 
*/ 
SparkRequests._ScriptData = function(){};


/** 
 * A collection of arbitrary data that can be added to a message via a Cloud Code script.<p>
 * 
*/ 
SparkRequests.prototype._ScriptData = function(){};


/** 
 * <p>
 * 
*/ 
SparkRequests._ChallengeType = function(){};


/** 
 * <p>
 * 
*/ 
SparkRequests.prototype._ChallengeType = function(){};


/** 
 * A nested object that represents a bought item.<p>
 * 
*/ 
SparkRequests._Boughtitem = function(){};


/** 
 * A nested object that represents a bought item.<p>
 * 
*/ 
SparkRequests.prototype._Boughtitem = function(){};


/** 
 * A nested object that represents a player message.<p>
 * 
*/ 
SparkRequests._PlayerMessage = function(){};


/** 
 * A nested object that represents a player message.<p>
 * 
*/ 
SparkRequests.prototype._PlayerMessage = function(){};


/** 
 * An object that represents a player in a pending match.<p>
 * 
*/ 
SparkRequests._MatchedPlayer = function(){};


/** 
 * An object that represents a player in a pending match.<p>
 * 
*/ 
SparkRequests.prototype._MatchedPlayer = function(){};


/** 
 * An object that represents a pending match.<p>
 * 
*/ 
SparkRequests._PendingMatch = function(){};


/** 
 * An object that represents a pending match.<p>
 * 
*/ 
SparkRequests.prototype._PendingMatch = function(){};


/** 
 * A nested object that represents a participant in a match.<p>
 * 
*/ 
SparkRequests._Participant = function(){};


/** 
 * A nested object that represents a participant in a match.<p>
 * 
*/ 
SparkRequests.prototype._Participant = function(){};


/** 
 * A nested object that represents a single item in a transaction.<p>
 * 
*/ 
SparkRequests._PlayerTransactionItem = function(){};


/** 
 * A nested object that represents a single item in a transaction.<p>
 * 
*/ 
SparkRequests.prototype._PlayerTransactionItem = function(){};


/** 
 * A nested object that represents a player transaction.<p>
 * 
*/ 
SparkRequests._PlayerTransaction = function(){};


/** 
 * A nested object that represents a player transaction.<p>
 * 
*/ 
SparkRequests.prototype._PlayerTransaction = function(){};


/** 
 * Represents the number of turns a player has taken in a turn based challenge.<p>
 * 
*/ 
SparkRequests._PlayerTurnCount = function(){};


/** 
 * Represents the number of turns a player has taken in a turn based challenge.<p>
 * 
*/ 
SparkRequests.prototype._PlayerTurnCount = function(){};


/** 
 * A nested object that represents the challenge data.<p>
 * 
*/ 
SparkRequests._Challenge = function(){};


/** 
 * A nested object that represents the challenge data.<p>
 * 
*/ 
SparkRequests.prototype._Challenge = function(){};


/** 
 * A the details of a social connection<p>
 * 
*/ 
SparkRequests._SocialStatus = function(){};


/** 
 * A the details of a social connection<p>
 * 
*/ 
SparkRequests.prototype._SocialStatus = function(){};


/** 
 * Leaderboard entry data<p>As well as the parameters below there may be others depending on your game's configuration.<p>
 * 
*/ 
SparkRequests._LeaderboardData = function(){};


/** 
 * Leaderboard entry data<p>As well as the parameters below there may be others depending on your game's configuration.<p>
 * 
*/ 
SparkRequests.prototype._LeaderboardData = function(){};


/** 
 * Ranking information.<p>
 * 
*/ 
SparkRequests._LeaderboardRankDetails = function(){};


/** 
 * Ranking information.<p>
 * 
*/ 
SparkRequests.prototype._LeaderboardRankDetails = function(){};


/** 
 * Location details.<p>
 * 
*/ 
SparkRequests._Location = function(){};


/** 
 * Location details.<p>
 * 
*/ 
SparkRequests.prototype._Location = function(){};


/** 
 * A response containing the challenge instance id that was accepted.<p>
 * 
*/ 
SparkRequests._AcceptChallengeResponse = function(){};


/** 
 * A response containing the challenge instance id that was accepted.<p>
 * 
*/ 
SparkRequests.prototype._AcceptChallengeResponse = function(){};


/** 
 * A response containing the player's data.<p>
 * 
*/ 
SparkRequests._AccountDetailsResponse = function(){};


/** 
 * A response containing the player's data.<p>
 * 
*/ 
SparkRequests.prototype._AccountDetailsResponse = function(){};


/** 
 * A response to an analytics request<p>
 * 
*/ 
SparkRequests._AnalyticsResponse = function(){};


/** 
 * A response to an analytics request<p>
 * 
*/ 
SparkRequests.prototype._AnalyticsResponse = function(){};


/** 
 * A response containing leaderboard data around the current player<p>
 * 
*/ 
SparkRequests._AroundMeLeaderboardResponse = function(){};


/** 
 * A response containing leaderboard data around the current player<p>
 * 
*/ 
SparkRequests.prototype._AroundMeLeaderboardResponse = function(){};


/** 
 * A response containing the auth token<p>
 * 
*/ 
SparkRequests._AuthenticationResponse = function(){};


/** 
 * A response containing the auth token<p>
 * 
*/ 
SparkRequests.prototype._AuthenticationResponse = function(){};


/** 
 * A response containing the individual responses for requests performed via a BatchAdminRequest<p>
 * 
*/ 
SparkRequests._BatchAdminResponse = function(){};


/** 
 * A response containing the individual responses for requests performed via a BatchAdminRequest<p>
 * 
*/ 
SparkRequests.prototype._BatchAdminResponse = function(){};


/** 
 * A response containing details of the bought items<p>
 * 
*/ 
SparkRequests._BuyVirtualGoodResponse = function(){};


/** 
 * A response containing details of the bought items<p>
 * 
*/ 
SparkRequests.prototype._BuyVirtualGoodResponse = function(){};


/** 
 * A response listing cancelled bulk jobs<p>
 * 
*/ 
SparkRequests._CancelBulkJobAdminResponse = function(){};


/** 
 * A response listing cancelled bulk jobs<p>
 * 
*/ 
SparkRequests.prototype._CancelBulkJobAdminResponse = function(){};


/** 
 * A response to a change user details request<p>
 * 
*/ 
SparkRequests._ChangeUserDetailsResponse = function(){};


/** 
 * A response to a change user details request<p>
 * 
*/ 
SparkRequests.prototype._ChangeUserDetailsResponse = function(){};


/** 
 * A response to a chat on challenge request<p>
 * 
*/ 
SparkRequests._ChatOnChallengeResponse = function(){};


/** 
 * A response to a chat on challenge request<p>
 * 
*/ 
SparkRequests.prototype._ChatOnChallengeResponse = function(){};


/** 
 * A response to a consume virtual goods response<p>
 * 
*/ 
SparkRequests._ConsumeVirtualGoodResponse = function(){};


/** 
 * A response to a consume virtual goods response<p>
 * 
*/ 
SparkRequests.prototype._ConsumeVirtualGoodResponse = function(){};


/** 
 * A response to a create challenge response<p>
 * 
*/ 
SparkRequests._CreateChallengeResponse = function(){};


/** 
 * A response to a create challenge response<p>
 * 
*/ 
SparkRequests.prototype._CreateChallengeResponse = function(){};


/** 
 * A response containing the details of the team that was created<p>
 * 
*/ 
SparkRequests._CreateTeamResponse = function(){};


/** 
 * A response containing the details of the team that was created<p>
 * 
*/ 
SparkRequests.prototype._CreateTeamResponse = function(){};


/** 
 * A response containing the challenge instance id of the challenge that was declined<p>
 * 
*/ 
SparkRequests._DeclineChallengeResponse = function(){};


/** 
 * A response containing the challenge instance id of the challenge that was declined<p>
 * 
*/ 
SparkRequests.prototype._DeclineChallengeResponse = function(){};


/** 
 * A response to a dismiss message request<p>
 * 
*/ 
SparkRequests._DismissMessageResponse = function(){};


/** 
 * A response to a dismiss message request<p>
 * 
*/ 
SparkRequests.prototype._DismissMessageResponse = function(){};


/** 
 * A response to a dismiss message request<p>
 * 
*/ 
SparkRequests._DismissMultipleMessagesResponse = function(){};


/** 
 * A response to a dismiss message request<p>
 * 
*/ 
SparkRequests.prototype._DismissMultipleMessagesResponse = function(){};


/** 
 * A response to a drop team request<p>
 * 
*/ 
SparkRequests._DropTeamResponse = function(){};


/** 
 * A response to a drop team request<p>
 * 
*/ 
SparkRequests.prototype._DropTeamResponse = function(){};


/** 
 * A response to an end session request<p>
 * 
*/ 
SparkRequests._EndSessionResponse = function(){};


/** 
 * A response to an end session request<p>
 * 
*/ 
SparkRequests.prototype._EndSessionResponse = function(){};


/** 
 * A response to a find challenge request<p>
 * 
*/ 
SparkRequests._FindChallengeResponse = function(){};


/** 
 * A response to a find challenge request<p>
 * 
*/ 
SparkRequests.prototype._FindChallengeResponse = function(){};


/** 
 * A response to a find match request<p>
 * 
*/ 
SparkRequests._FindMatchResponse = function(){};


/** 
 * A response to a find match request<p>
 * 
*/ 
SparkRequests.prototype._FindMatchResponse = function(){};


/** 
 * A response to a FindPendingMatchesRequest<p>
 * 
*/ 
SparkRequests._FindPendingMatchesResponse = function(){};


/** 
 * A response to a FindPendingMatchesRequest<p>
 * 
*/ 
SparkRequests.prototype._FindPendingMatchesResponse = function(){};


/** 
 * A response containing the details of an error<p>
 * 
*/ 
SparkRequests._GameSparksErrorResponse = function(){};


/** 
 * A response containing the details of an error<p>
 * 
*/ 
SparkRequests.prototype._GameSparksErrorResponse = function(){};


/** 
 * A response containing the details of a challenge<p>
 * 
*/ 
SparkRequests._GetChallengeResponse = function(){};


/** 
 * A response containing the details of a challenge<p>
 * 
*/ 
SparkRequests.prototype._GetChallengeResponse = function(){};


/** 
 * A response containing the download URL for a downloadable item<p>
 * 
*/ 
SparkRequests._GetDownloadableResponse = function(){};


/** 
 * A response containing the download URL for a downloadable item<p>
 * 
*/ 
SparkRequests.prototype._GetDownloadableResponse = function(){};


/** 
 * A response containing leaderboard entry data for a given player. Example response: {"HS": {"userId":"537f08e1e4b01fdedfa52c49","SCORE": 123,"city":"York","country":"GB","userName":"","when":"2014-07-17T12:18Z","rank": 1 }<p>
 * 
*/ 
SparkRequests._GetLeaderboardEntriesResponse = function(){};


/** 
 * A response containing leaderboard entry data for a given player. Example response: {"HS": {"userId":"537f08e1e4b01fdedfa52c49","SCORE": 123,"city":"York","country":"GB","userName":"","when":"2014-07-17T12:18Z","rank": 1 }<p>
 * 
*/ 
SparkRequests.prototype._GetLeaderboardEntriesResponse = function(){};


/** 
 * A response containing the message data for a given message<p>
 * 
*/ 
SparkRequests._GetMessageResponse = function(){};


/** 
 * A response containing the message data for a given message<p>
 * 
*/ 
SparkRequests.prototype._GetMessageResponse = function(){};


/** 
 * A response containing team data for teams that a player belong to<p>
 * 
*/ 
SparkRequests._GetMyTeamsResponse = function(){};


/** 
 * A response containing team data for teams that a player belong to<p>
 * 
*/ 
SparkRequests.prototype._GetMyTeamsResponse = function(){};


/** 
 * A response containing the requested property<p>
 * 
*/ 
SparkRequests._GetPropertyResponse = function(){};


/** 
 * A response containing the requested property<p>
 * 
*/ 
SparkRequests.prototype._GetPropertyResponse = function(){};


/** 
 * A response containing the requested property set<p>
 * 
*/ 
SparkRequests._GetPropertySetResponse = function(){};


/** 
 * A response containing the requested property set<p>
 * 
*/ 
SparkRequests.prototype._GetPropertySetResponse = function(){};


/** 
 * A response containing the details of the requested teams<p>
 * 
*/ 
SparkRequests._GetTeamResponse = function(){};


/** 
 * A response containing the details of the requested teams<p>
 * 
*/ 
SparkRequests.prototype._GetTeamResponse = function(){};


/** 
 * A response containing a time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform<p>
 * 
*/ 
SparkRequests._GetUploadUrlResponse = function(){};


/** 
 * A response containing a time sensitive URL to allow the game to upload a piece of player content to the GameSparks platform<p>
 * 
*/ 
SparkRequests.prototype._GetUploadUrlResponse = function(){};


/** 
 * A reponse containing a time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.<p>
 * 
*/ 
SparkRequests._GetUploadedResponse = function(){};


/** 
 * A reponse containing a time sensitive URL to a piece of content that was previously uploaded to the GameSparks platform by a player.<p>
 * 
*/ 
SparkRequests.prototype._GetUploadedResponse = function(){};


/** 
 * A response to a player joining a challenge<p>
 * 
*/ 
SparkRequests._JoinChallengeResponse = function(){};


/** 
 * A response to a player joining a challenge<p>
 * 
*/ 
SparkRequests.prototype._JoinChallengeResponse = function(){};


/** 
 * A response to a JoinPendingMatchRequest<p>
 * 
*/ 
SparkRequests._JoinPendingMatchResponse = function(){};


/** 
 * A response to a JoinPendingMatchRequest<p>
 * 
*/ 
SparkRequests.prototype._JoinPendingMatchResponse = function(){};


/** 
 * A response to a player joining a team or a request for team data<p>
 * 
*/ 
SparkRequests._JoinTeamResponse = function(){};


/** 
 * A response to a player joining a team or a request for team data<p>
 * 
*/ 
SparkRequests.prototype._JoinTeamResponse = function(){};


/** 
 * A response containing leaderboard data<p>
 * 
*/ 
SparkRequests._LeaderboardDataResponse = function(){};


/** 
 * A response containing leaderboard data<p>
 * 
*/ 
SparkRequests.prototype._LeaderboardDataResponse = function(){};


/** 
 * A response containing leaderboard entry data for a given player. The response will contain one key for every leaderboard in the result. Example response: {"HS": [{"userId":"537f08e1e4b01fdedfa52c49","SCORE": 123,"city":"York","country":"GB","userName":"","when":"2014-07-17T12:18Z","rank": 1  }]}<p>
 * 
*/ 
SparkRequests._LeaderboardsEntriesResponse = function(){};


/** 
 * A response containing leaderboard entry data for a given player. The response will contain one key for every leaderboard in the result. Example response: {"HS": [{"userId":"537f08e1e4b01fdedfa52c49","SCORE": 123,"city":"York","country":"GB","userName":"","when":"2014-07-17T12:18Z","rank": 1  }]}<p>
 * 
*/ 
SparkRequests.prototype._LeaderboardsEntriesResponse = function(){};


/** 
 * A response to a player leaving a team<p>
 * 
*/ 
SparkRequests._LeaveTeamResponse = function(){};


/** 
 * A response to a player leaving a team<p>
 * 
*/ 
SparkRequests.prototype._LeaveTeamResponse = function(){};


/** 
 * A reponse containing the game's achievments and an indication of whether the player has earned it<p>
 * 
*/ 
SparkRequests._ListAchievementsResponse = function(){};


/** 
 * A reponse containing the game's achievments and an indication of whether the player has earned it<p>
 * 
*/ 
SparkRequests.prototype._ListAchievementsResponse = function(){};


/** 
 * A response listing existing bulk jobs<p>
 * 
*/ 
SparkRequests._ListBulkJobsAdminResponse = function(){};


/** 
 * A response listing existing bulk jobs<p>
 * 
*/ 
SparkRequests.prototype._ListBulkJobsAdminResponse = function(){};


/** 
 * A response containing challenges that are in the state that was specified in the request<p>
 * 
*/ 
SparkRequests._ListChallengeResponse = function(){};


/** 
 * A response containing challenges that are in the state that was specified in the request<p>
 * 
*/ 
SparkRequests.prototype._ListChallengeResponse = function(){};


/** 
 * A response containing the list of configured challenge types in the game<p>
 * 
*/ 
SparkRequests._ListChallengeTypeResponse = function(){};


/** 
 * A response containing the list of configured challenge types in the game<p>
 * 
*/ 
SparkRequests.prototype._ListChallengeTypeResponse = function(){};


/** 
 * A response containing the list of the current players game friends.<p>
 * 
*/ 
SparkRequests._ListGameFriendsResponse = function(){};


/** 
 * A response containing the list of the current players game friends.<p>
 * 
*/ 
SparkRequests.prototype._ListGameFriendsResponse = function(){};


/** 
 * A response containing a list of non game friends.<p>
 * 
*/ 
SparkRequests._ListInviteFriendsResponse = function(){};


/** 
 * A response containing a list of non game friends.<p>
 * 
*/ 
SparkRequests.prototype._ListInviteFriendsResponse = function(){};


/** 
 * A response containing a list of all leaderboards configured in the game.<p>
 * 
*/ 
SparkRequests._ListLeaderboardsResponse = function(){};


/** 
 * A response containing a list of all leaderboards configured in the game.<p>
 * 
*/ 
SparkRequests.prototype._ListLeaderboardsResponse = function(){};


/** 
 * A response containing the list of the current players messages / notifications.<p>
 * 
*/ 
SparkRequests._ListMessageDetailResponse = function(){};


/** 
 * A response containing the list of the current players messages / notifications.<p>
 * 
*/ 
SparkRequests.prototype._ListMessageDetailResponse = function(){};


/** 
 * A response containing the list of the current players messages / notifications.<p>
 * 
*/ 
SparkRequests._ListMessageResponse = function(){};


/** 
 * A response containing the list of the current players messages / notifications.<p>
 * 
*/ 
SparkRequests.prototype._ListMessageResponse = function(){};


/** 
 * A response containing a summary of the list of the current players messages / notifications.<p>
 * 
*/ 
SparkRequests._ListMessageSummaryResponse = function(){};


/** 
 * A response containing a summary of the list of the current players messages / notifications.<p>
 * 
*/ 
SparkRequests.prototype._ListMessageSummaryResponse = function(){};


/** 
 * A response to a list team messages request.<p>
 * 
*/ 
SparkRequests._ListTeamChatResponse = function(){};


/** 
 * A response to a list team messages request.<p>
 * 
*/ 
SparkRequests.prototype._ListTeamChatResponse = function(){};


/** 
 * A response containing the list of teams for a game.<p>
 * 
*/ 
SparkRequests._ListTeamsResponse = function(){};


/** 
 * A response containing the list of teams for a game.<p>
 * 
*/ 
SparkRequests.prototype._ListTeamsResponse = function(){};


/** 
 * A response listing transactions for the player<p>
 * 
*/ 
SparkRequests._ListTransactionsResponse = function(){};


/** 
 * A response listing transactions for the player<p>
 * 
*/ 
SparkRequests.prototype._ListTransactionsResponse = function(){};


/** 
 * A response containing the list of configured virtual goods.<p>
 * 
*/ 
SparkRequests._ListVirtualGoodsResponse = function(){};


/** 
 * A response containing the list of configured virtual goods.<p>
 * 
*/ 
SparkRequests.prototype._ListVirtualGoodsResponse = function(){};


/** 
 * A response to a log challenge event request<p>
 * 
*/ 
SparkRequests._LogChallengeEventResponse = function(){};


/** 
 * A response to a log challenge event request<p>
 * 
*/ 
SparkRequests.prototype._LogChallengeEventResponse = function(){};


/** 
 * A response to a log event request<p>
 * 
*/ 
SparkRequests._LogEventResponse = function(){};


/** 
 * A response to a log event request<p>
 * 
*/ 
SparkRequests.prototype._LogEventResponse = function(){};


/** 
 * A response to a match details request<p>
 * 
*/ 
SparkRequests._MatchDetailsResponse = function(){};


/** 
 * A response to a match details request<p>
 * 
*/ 
SparkRequests.prototype._MatchDetailsResponse = function(){};


/** 
 * A response to a matchmaking request<p>
 * 
*/ 
SparkRequests._MatchmakingResponse = function(){};


/** 
 * A response to a matchmaking request<p>
 * 
*/ 
SparkRequests.prototype._MatchmakingResponse = function(){};


/** 
 * A response to a push registration request<p>
 * 
*/ 
SparkRequests._PushRegistrationResponse = function(){};


/** 
 * A response to a push registration request<p>
 * 
*/ 
SparkRequests.prototype._PushRegistrationResponse = function(){};


/** 
 * A response to a registration request<p>
 * 
*/ 
SparkRequests._RegistrationResponse = function(){};


/** 
 * A response to a registration request<p>
 * 
*/ 
SparkRequests.prototype._RegistrationResponse = function(){};


/** 
 * A response containing details of the revoked items<p>
 * 
*/ 
SparkRequests._RevokePurchaseGoodsResponse = function(){};


/** 
 * A response containing details of the revoked items<p>
 * 
*/ 
SparkRequests.prototype._RevokePurchaseGoodsResponse = function(){};


/** 
 * A response acknowledging the scheduling of a bulk job<p>
 * 
*/ 
SparkRequests._ScheduleBulkJobAdminResponse = function(){};


/** 
 * A response acknowledging the scheduling of a bulk job<p>
 * 
*/ 
SparkRequests.prototype._ScheduleBulkJobAdminResponse = function(){};


/** 
 * A response to a send friend message request.<p>
 * 
*/ 
SparkRequests._SendFriendMessageResponse = function(){};


/** 
 * A response to a send friend message request.<p>
 * 
*/ 
SparkRequests.prototype._SendFriendMessageResponse = function(){};


/** 
 * A response to a send team message request.<p>
 * 
*/ 
SparkRequests._SendTeamChatMessageResponse = function(){};


/** 
 * A response to a send team message request.<p>
 * 
*/ 
SparkRequests.prototype._SendTeamChatMessageResponse = function(){};


/** 
 * A response to a SocialDisconnectRequest<p>
 * 
*/ 
SparkRequests._SocialDisconnectResponse = function(){};


/** 
 * A response to a SocialDisconnectRequest<p>
 * 
*/ 
SparkRequests.prototype._SocialDisconnectResponse = function(){};


/** 
 * A response containing the details of a the players social connections<p>
 * 
*/ 
SparkRequests._SocialStatusResponse = function(){};


/** 
 * A response containing the details of a the players social connections<p>
 * 
*/ 
SparkRequests.prototype._SocialStatusResponse = function(){};


/** 
 * A response to an update message request<p>
 * 
*/ 
SparkRequests._UpdateMessageResponse = function(){};


/** 
 * A response to an update message request<p>
 * 
*/ 
SparkRequests.prototype._UpdateMessageResponse = function(){};


/** 
 * A response containing the challenge instance id that was withdrawn by a player<p>
 * 
*/ 
SparkRequests._WithdrawChallengeResponse = function(){};


/** 
 * A response containing the challenge instance id that was withdrawn by a player<p>
 * 
*/ 
SparkRequests.prototype._WithdrawChallengeResponse = function(){};


/** 
 * Message sent to a player when they have been awarded an achievement within the game.<p>This message may be triggered by a leaderboard or a script.<p>The player may have gained a virtual good or virtual currency as a result of gaining the award.<p>
 * 
*/ 
SparkRequests._AchievementEarnedMessage = function(){};


/** 
 * Message sent to a player when they have been awarded an achievement within the game.<p>This message may be triggered by a leaderboard or a script.<p>The player may have gained a virtual good or virtual currency as a result of gaining the award.<p>
 * 
*/ 
SparkRequests.prototype._AchievementEarnedMessage = function(){};


/** 
 * A message indicating that the challenge has been accepted.<p>
 * 
*/ 
SparkRequests._ChallengeAcceptedMessage = function(){};


/** 
 * A message indicating that the challenge has been accepted.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeAcceptedMessage = function(){};


/** 
 * A message indicating that a player has posted a score in to the challenge's leaderboard.<p>
 * 
*/ 
SparkRequests._ChallengeChangedMessage = function(){};


/** 
 * A message indicating that a player has posted a score in to the challenge's leaderboard.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeChangedMessage = function(){};


/** 
 * A message containing general chat between players involved in the challenge.<p>
 * 
*/ 
SparkRequests._ChallengeChatMessage = function(){};


/** 
 * A message containing general chat between players involved in the challenge.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeChatMessage = function(){};


/** 
 * A message indicating that a player has declined the challenge.<p>
 * 
*/ 
SparkRequests._ChallengeDeclinedMessage = function(){};


/** 
 * A message indicating that a player has declined the challenge.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeDeclinedMessage = function(){};


/** 
 * A message indicating that the challenge result is a draw.<p>This message is sent to all the players who have drawn in the current challenge<p>
 * 
*/ 
SparkRequests._ChallengeDrawnMessage = function(){};


/** 
 * A message indicating that the challenge result is a draw.<p>This message is sent to all the players who have drawn in the current challenge<p>
 * 
*/ 
SparkRequests.prototype._ChallengeDrawnMessage = function(){};


/** 
 * A message indicating that the challenge expiry date has passed.<p>
 * 
*/ 
SparkRequests._ChallengeExpiredMessage = function(){};


/** 
 * A message indicating that the challenge expiry date has passed.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeExpiredMessage = function(){};


/** 
 * A message indicating that a challenge has been issued.<p>
 * 
*/ 
SparkRequests._ChallengeIssuedMessage = function(){};


/** 
 * A message indicating that a challenge has been issued.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeIssuedMessage = function(){};


/** 
 * A message indicating that the challenge has been joined.<p>
 * 
*/ 
SparkRequests._ChallengeJoinedMessage = function(){};


/** 
 * A message indicating that the challenge has been joined.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeJoinedMessage = function(){};


/** 
 * @Deprecated<p>A message indicating that the challenge has reached its end time but was not yet started.<p>This message is no longer used. Instead, a ChallengeExpiredMessage will be triggered.<p>
 * 
*/ 
SparkRequests._ChallengeLapsedMessage = function(){};


/** 
 * @Deprecated<p>A message indicating that the challenge has reached its end time but was not yet started.<p>This message is no longer used. Instead, a ChallengeExpiredMessage will be triggered.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeLapsedMessage = function(){};


/** 
 * A message indicating that the challenge has been lost.<p>This message is sent to all the players in the challenge who have lost<p>
 * 
*/ 
SparkRequests._ChallengeLostMessage = function(){};


/** 
 * A message indicating that the challenge has been lost.<p>This message is sent to all the players in the challenge who have lost<p>
 * 
*/ 
SparkRequests.prototype._ChallengeLostMessage = function(){};


/** 
 * A message indicating that the challenge has started<p>
 * 
*/ 
SparkRequests._ChallengeStartedMessage = function(){};


/** 
 * A message indicating that the challenge has started<p>
 * 
*/ 
SparkRequests.prototype._ChallengeStartedMessage = function(){};


/** 
 * A message indicating that the current player has taken a turn with this challenge.<p>
 * 
*/ 
SparkRequests._ChallengeTurnTakenMessage = function(){};


/** 
 * A message indicating that the current player has taken a turn with this challenge.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeTurnTakenMessage = function(){};


/** 
 * A message indicating that there is a challenge waiting for the player.<p>
 * 
*/ 
SparkRequests._ChallengeWaitingMessage = function(){};


/** 
 * A message indicating that there is a challenge waiting for the player.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeWaitingMessage = function(){};


/** 
 * A message indicating that the challenging player has withdrawn this challenge.<p>
 * 
*/ 
SparkRequests._ChallengeWithdrawnMessage = function(){};


/** 
 * A message indicating that the challenging player has withdrawn this challenge.<p>
 * 
*/ 
SparkRequests.prototype._ChallengeWithdrawnMessage = function(){};


/** 
 * A message indicating that the challenge has been won.<p>This message is only sent to the individual player who has won the challenge<p>
 * 
*/ 
SparkRequests._ChallengeWonMessage = function(){};


/** 
 * A message indicating that the challenge has been won.<p>This message is only sent to the individual player who has won the challenge<p>
 * 
*/ 
SparkRequests.prototype._ChallengeWonMessage = function(){};


/** 
 * A message sent from a player to one of his social network friends.<p>
 * 
*/ 
SparkRequests._FriendMessage = function(){};


/** 
 * A message sent from a player to one of his social network friends.<p>
 * 
*/ 
SparkRequests.prototype._FriendMessage = function(){};


/** 
 * This message is sent to players when their rank in a global leaderboard changes such that they are knocked out of the configured 'Top N'.<p>
 * 
*/ 
SparkRequests._GlobalRankChangedMessage = function(){};


/** 
 * This message is sent to players when their rank in a global leaderboard changes such that they are knocked out of the configured 'Top N'.<p>
 * 
*/ 
SparkRequests.prototype._GlobalRankChangedMessage = function(){};


/** 
 * A message indicating that a match has been found<p>
 * 
*/ 
SparkRequests._MatchFoundMessage = function(){};


/** 
 * A message indicating that a match has been found<p>
 * 
*/ 
SparkRequests.prototype._MatchFoundMessage = function(){};


/** 
 * A message indicating that no suitable match was found during the configured time<p>
 * 
*/ 
SparkRequests._MatchNotFoundMessage = function(){};


/** 
 * A message indicating that no suitable match was found during the configured time<p>
 * 
*/ 
SparkRequests.prototype._MatchNotFoundMessage = function(){};


/** 
 * A message indicating that there has been an update to a pending match request, but it is not yet complete<p>
 * 
*/ 
SparkRequests._MatchUpdatedMessage = function(){};


/** 
 * A message indicating that there has been an update to a pending match request, but it is not yet complete<p>
 * 
*/ 
SparkRequests.prototype._MatchUpdatedMessage = function(){};


/** 
 * A message indicating that the player has achieved a new high score in the game.<p>
 * 
*/ 
SparkRequests._NewHighScoreMessage = function(){};


/** 
 * A message indicating that the player has achieved a new high score in the game.<p>
 * 
*/ 
SparkRequests.prototype._NewHighScoreMessage = function(){};


/** 
 * A message indicating that the player's team has achieved a new high score in the game.<p>
 * 
*/ 
SparkRequests._NewTeamScoreMessage = function(){};


/** 
 * A message indicating that the player's team has achieved a new high score in the game.<p>
 * 
*/ 
SparkRequests.prototype._NewTeamScoreMessage = function(){};


/** 
 * A message sent from a Cloud Code script to one or more players.<p>See the Spark.sendMessage function in the Cloud Code - Java Script API documentation.<p>
 * 
*/ 
SparkRequests._ScriptMessage = function(){};


/** 
 * A message sent from a Cloud Code script to one or more players.<p>See the Spark.sendMessage function in the Cloud Code - Java Script API documentation.<p>
 * 
*/ 
SparkRequests.prototype._ScriptMessage = function(){};


/** 
 * A message sent to sockets when disconnectOthers() has been called.<p>
 * 
*/ 
SparkRequests._SessionTerminatedMessage = function(){};


/** 
 * A message sent to sockets when disconnectOthers() has been called.<p>
 * 
*/ 
SparkRequests.prototype._SessionTerminatedMessage = function(){};


/** 
 * This message is sent to players when their rank in a leaderboard changes with respect to the rank of their social network friends.<p>
 * 
*/ 
SparkRequests._SocialRankChangedMessage = function(){};


/** 
 * This message is sent to players when their rank in a leaderboard changes with respect to the rank of their social network friends.<p>
 * 
*/ 
SparkRequests.prototype._SocialRankChangedMessage = function(){};


/** 
 * A message sent from a player to an entire team.<p>
 * 
*/ 
SparkRequests._TeamChatMessage = function(){};


/** 
 * A message sent from a player to an entire team.<p>
 * 
*/ 
SparkRequests.prototype._TeamChatMessage = function(){};


/** 
 * This message is sent to players when their rank in a global leaderboard changes such that they are knocked out of the configured 'Top N'.<p>
 * 
*/ 
SparkRequests._TeamRankChangedMessage = function(){};


/** 
 * This message is sent to players when their rank in a global leaderboard changes such that they are knocked out of the configured 'Top N'.<p>
 * 
*/ 
SparkRequests.prototype._TeamRankChangedMessage = function(){};


/** 
 * A message indicating that the asynchronous upload task trigger by the player is now complete.<p>
 * 
*/ 
SparkRequests._UploadCompleteMessage = function(){};


/** 
 * A message indicating that the asynchronous upload task trigger by the player is now complete.<p>
 * 
*/ 
SparkRequests.prototype._UploadCompleteMessage = function(){};


