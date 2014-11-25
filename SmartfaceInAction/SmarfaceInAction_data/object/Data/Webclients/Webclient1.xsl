<WEBCLIENT ID="18D8B820-57A9-4DD6-B70E-D5073B0D25D5" Name="wcMap" HostUrl="http://services.smartface.io/SmartfaceInAction/Maps" Method="0" ContentType="json" AddUserInfo="0" NotifyUpdateStatus="1" MaxReceiveCount="0" TimeOutInterval="60" RequestRawBodyEnabled="0" RequestRawBodyContentType="application/json" WriteMode="1">
	<SendParams>
	</SendParams>
	<ReceiveParams>
		<Params>
			<Param XPath="$" Value="Data.wcMap_OutDSetwcMap.wcMap" Parent="BODY" />
			<Param XPath="$.pins" Value="Data.wcMap_OutDSetpins.pins" Parent="BODY" />
			<Param XPath="$.pins.title" Value="Data.wcMap_OutDSetpins.title" Parent="BODY" />
			<Param XPath="$.pins.id" Value="Data.wcMap_OutDSetpins.id" Parent="BODY" />
			<Param XPath="$.pins.type" Value="Data.wcMap_OutDSetpins.type" Parent="BODY" />
			<Param XPath="$.pins.subtitle" Value="Data.wcMap_OutDSetpins.subtitle" Parent="BODY" />
			<Param XPath="$.pins.latitude" Value="Data.wcMap_OutDSetpins.latitude" Parent="BODY" />
			<Param XPath="$.pins.address" Value="Data.wcMap_OutDSetpins.address" Parent="BODY" />
			<Param XPath="$.pins.longitude" Value="Data.wcMap_OutDSetpins.longitude" Parent="BODY" />
			<Param XPath="$.success" Value="Data.wcMap_OutDSetwcMap.success" Parent="BODY" />
			<Param XPath="$.error" Value="Data.wcMap_OutDSetwcMap.error" Parent="BODY" />
			<Param XPath="$" Value="Data.wcMap_HeaderOutDSetwcMap.wcMap" Parent="HEADER" />
			<Param XPath="$.Cache-Control" Value="Data.wcMap_HeaderOutDSetwcMap.Cache_Control" Parent="HEADER" />
			<Param XPath="$.Pragma" Value="Data.wcMap_HeaderOutDSetwcMap.Pragma" Parent="HEADER" />
			<Param XPath="$.Transfer-Encoding" Value="Data.wcMap_HeaderOutDSetwcMap.Transfer_Encoding" Parent="HEADER" />
			<Param XPath="$.Content-Type" Value="Data.wcMap_HeaderOutDSetwcMap.Content_Type" Parent="HEADER" />
			<Param XPath="$.Content-Encoding" Value="Data.wcMap_HeaderOutDSetwcMap.Content_Encoding" Parent="HEADER" />
			<Param XPath="$.Expires" Value="Data.wcMap_HeaderOutDSetwcMap.Expires" Parent="HEADER" />
			<Param XPath="$.Vary" Value="Data.wcMap_HeaderOutDSetwcMap.Vary" Parent="HEADER" />
			<Param XPath="$.Server" Value="Data.wcMap_HeaderOutDSetwcMap.Server" Parent="HEADER" />
			<Param XPath="$.X-AspNet-Version" Value="Data.wcMap_HeaderOutDSetwcMap.X_AspNet_Version" Parent="HEADER" />
			<Param XPath="$.X-Powered-By" Value="Data.wcMap_HeaderOutDSetwcMap.X_Powered_By" Parent="HEADER" />
			<Param XPath="$.Date" Value="Data.wcMap_HeaderOutDSetwcMap.Date" Parent="HEADER" />
		</Params>
	</ReceiveParams>
	<CustomRequestHeaders>
	</CustomRequestHeaders>
	<ONSYNDICATIONSUCCESS script="Project_wcMap_OnSyndicationSuccess(e);" />
</WEBCLIENT>
