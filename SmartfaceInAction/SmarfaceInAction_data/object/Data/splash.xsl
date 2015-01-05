<?xml version="1.0" ?>
<SMARTFACEPROJECT xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="SmartfaceProjectPlayerUpdated.xsd">
<PROJECT SID="-1" WS="http://www.smartface.biz" dateLastResourceUpdated="010101000000" AppID="1701667150" AppName="Smartface Demo" CID="0" Ver="1.1.0" ScreenW="320" ScreenH="480" Dpi="163" FacebookAppUID="" FacebookAppSecret="" TwitterConsumerKey="" TwitterConsumerSecret="">
	<MAPAPI AndroidMapKey="" IosGeocodingKey="" />
	<ADMOB AdMobPublisherId="" AdMobTestUsage="0" />
	<DEVICEORIENTATIONS DeviceOrientationPortrait="1" DeviceOrientationUpsideDown="0" DeviceOrientationLandscapeLeft="0" DeviceOrientationLandscapeRight="0" />
	<ANDROIDPRODUCTKEY AndroidProductKey="" />
	<ANDROIDSENDERID AndroidSenderID="" />
	<APPLICATIONCACHESIZE ApplicationCacheSize="50" />
	<APPLICATIONNAME ApplicationName="Smartface" />
	<NAVIGATIONBARUPDATE NavigationBarUpdate="1" />
	<RESOURCES>
	</RESOURCES>
	<FLURRYANALYTICS Enb="0" IOSAppID="" AndroidAppID="" LogUserInfoStatistics="1" LogApplicationUsageDurations="1" LogNetworkUsage="0" LogApplicationStartEvents="0" LogAudioPlayDurations="0" LogVideoPlayDurations="0" LogShowPageActions="0" LogCallActions="0" LogSendSMSActions="0">
		<DATA>
			<PRM Nm="Val1" Val="" />
			<PRM Nm="Val2" Val="" />
			<PRM Nm="Val3" Val="" />
		</DATA>
	</FLURRYANALYTICS>
	<LOGGING LogServerUrl="" MaxLogSize="30" LogError="0" LogWarning="0" LogDebug="0">
	</LOGGING>
	<SESANALYTICS SESAPIKey="BaLsq7OWNkiRQXjofMhJGw" SESAPIURL="http://analytics.smartface.io/api/AnalyticsData/" />
	<PAGES>
		<PG ID="00000000-0000-0000-0000-000000000002" Type="0" UsesTemplatePage="0" TemplatePageID="00000000-0000-0000-0000-100000000001" Nm="SplashPage" BgClr="ffffff" BgTparent="0" BgPicName="defaultsplash.png" DefFoc="00000000-0000-0000-0000-100000000001" SldEffect="0" SldEase="0" Blr="0" ShwStatusBar="0" EnableTabBar="0" LockOrientation="0" PageOrientation="0" IsTemplatePage="0" IsSplashScreen="1" ShwNavigationBar="0" ShwActionBar="0" TouchEnabled="1">
			<EDGE X="0" Y="0" W="320" H="480" />
			<POS Pos="3" SMode="2" />
			<BODY>
				<PIC ID="8DBD0362-A700-4DBD-B8F2-22D60211435B" Nm="LogoImage" Vsb="1" Alpha="100" TouchEnabled="0">
					<LCT X="0%" Y="0%" W="1000%" H="500%" Z="0" Anc="3" LockAutoSize="0" LockAutoPosition="0" />
					<POS Pos="15" SMode="1" EnableZoom="0" EnableScroll="0" EnableCache="1" />
					<DATA>
						<PRM Nm="Bind" Val="resources://logosplash.png" />
					</DATA>
				</PIC>
			</BODY>
			<EVENTS>
				<ONSHOW script="SplashPage_Self_OnShow(e);" />
			</EVENTS>
		</PG>
	</PAGES>
</PROJECT>
</SMARTFACEPROJECT>