<WEBCLIENT ID="CD0225BA-CAB8-4055-9C2B-04682307F74A" Name="wcTwitter" HostUrl="https://api.twitter.com/1.1/statuses/user_timeline.json?count=${count}&amp;screen_name=smartface_io" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="0" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/xml" WriteMode="1">
	<SendParams>
	</SendParams>
	<ReceiveParams>
		<Params>
			<Param XPath="plain" Value="" Parent="BODY" />
			<Param XPath="$" Value="Data.wcTwitter_OutDSetwcTwitter.wcTwitter" Parent="BODY" />
		</Params>
	</ReceiveParams>
	<CustomRequestHeaders>
		<Params>
			<Param Name="Authorization" Value="Data.wcTwitter_RequestHeadersDSet.Authorization" />
		</Params>
	</CustomRequestHeaders>
	<ONSYNDICATIONSUCCESS script="Project_wcTwitter_OnSyndicationSuccess(e);" />
</WEBCLIENT>
